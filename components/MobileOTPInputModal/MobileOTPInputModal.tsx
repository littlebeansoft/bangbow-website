import { FC, useEffect, useRef } from 'react'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Modal, Space } from 'antd'
import styled from '@emotion/styled'
import OtpInput from 'react-otp-input'

import useGenerateComponentKey from 'hooks/useGenerateComponentKey'

import Text from 'components/Text'
import BangbowLogo from 'components/BangbowLogo'
import OTPCountDown from './OTPCountDown'

import { getPageTypeTheme } from 'helpers/utils'

import color from 'constants/color'

interface MobileOTPInputModalProps {
  phoneNumber?: string
  visible?: boolean
  onClose?: VoidFunction
}

const MobileOTPInputModal: FC<MobileOTPInputModalProps> = ({
  phoneNumber = '08x-xxx-xxxx',
  visible,
  onClose,
}) => {
  const router = useRouter()

  const otpInputRef = useRef<OtpInput | null>()

  const [otp, setOTP] = useState<string>()
  const [otpCountDownID, setOTPCountDownID] = useGenerateComponentKey()
  const [resentOTPButtonDisabled, setResentOTPButtonDisabled] = useState(false)

  const pageType = getPageTypeTheme(router.asPath)

  const primaryColor = color.primary[pageType]

  /**
   * Have to use effect to make better UX when users have request the OTP should always focus the first OTP input.
   */
  useEffect(() => {
    if (visible) {
      otpInputRef.current?.focusInput(0)
    }
  }, [visible])

  return (
    <Modal
      width={480}
      visible={visible}
      onCancel={onClose}
      footer={false}
      centered
    >
      <MobileOTPInputModalContainer>
        <BangbowLogo />

        <Text size="headline" weight="bold">
          ยืนยันตัวตน
        </Text>

        <Text
          size="body"
          style={{
            color: '#ccc',
          }}
        >
          ระบบได้ส่งรหัสยืนยันไปที่เบอร์ {phoneNumber}
        </Text>

        <Text size="headline" weight={600}>
          Ref: 57awb
        </Text>

        <OtpInput
          ref={(ref) => (otpInputRef.current = ref)}
          isInputNum
          shouldAutoFocus
          containerStyle={{
            width: '100%',
            overflow: 'hidden',
            justifyContent: 'center',
          }}
          value={otp}
          numInputs={6}
          inputStyle={{
            width: 48,
            height: 48,
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: '1px solid #999',
          }}
          focusStyle={{
            borderBottom: `1px solid ${primaryColor}`,
            outline: 'none',
          }}
          separator={<OTPSeparator />}
          onChange={(otp: string) => setOTP(otp)}
        />

        {renderOTPResendSection()}

        <Button type="primary">ส่งรหัส</Button>
      </MobileOTPInputModalContainer>
    </Modal>
  )

  function renderOTPResendSection() {
    if (resentOTPButtonDisabled) {
      return (
        <Space>
          <Text
            size="body"
            style={{
              color: '#999',
            }}
          >
            ส่งรหัสได้อีกครั้งใน
          </Text>

          <OTPCountDown
            key={otpCountDownID}
            onCountDownCompleted={() => setResentOTPButtonDisabled(false)}
          />
        </Space>
      )
    }

    return (
      <Text
        type="link"
        page={pageType}
        size="body"
        onClick={() => {
          setOTPCountDownID()
          setResentOTPButtonDisabled(true)
        }}
      >
        ส่งรหัสอีกครั้งหากไม่ได้รับ OTP ?
      </Text>
    )
  }
}

export default MobileOTPInputModal

const MobileOTPInputModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const OTPSeparator = styled.div`
  margin: 0 4px;
`
