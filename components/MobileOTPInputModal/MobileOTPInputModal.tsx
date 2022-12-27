import { FC, useEffect, useRef } from 'react'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, message, Modal, Space } from 'antd'
import styled from '@emotion/styled'
import OtpInput from 'react18-input-otp'

import useGenerateComponentKey from 'hooks/useGenerateComponentKey'

import Text from 'components/Text'
import BangbowLogo from 'components/BangbowLogo'
import OTPCountDown from './OTPCountDown'

import { getPageTypeTheme } from 'helpers/utils'

import color from 'constants/color'

import { useAppDispatch, useAppSelector } from 'store'
import { setOtpData, setOtpVerify } from 'store/slices/otpSlice'
import { useRequestOtp, useSubmitOtp } from 'reactQuery/useOtp'

interface MobileOTPInputModalProps {
  phoneNumber?: string
  visible?: boolean
  onClose?: VoidFunction
  appName: string
}

const MobileOTPInputModal: FC<MobileOTPInputModalProps> = ({
  phoneNumber = '08x-xxx-xxxx',
  visible,
  onClose,
  appName,
}) => {
  const router = useRouter()

  const dispatch = useAppDispatch()

  const otpData = useAppSelector((state) => state.otp.otpData)

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
      setOTP('')
    }
  }, [visible])

  const { mutate: submitOtp, isLoading } = useSubmitOtp()
  const { mutate: requestOtp } = useRequestOtp()

  //090-xxx-x899
  const textPhoneNumber = phoneNumber.replace(
    /(\d{2})(\d{5})(\d{2})/,
    '$1x-xxx-x$3'
  )

  return (
    <Modal
      width={480}
      onCancel={onClose}
      footer={false}
      centered
      open={visible}
      closable={false}
      maskClosable={false}
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
          ระบบได้ส่งรหัสยืนยันไปที่เบอร์ {textPhoneNumber}
        </Text>

        <Text size="headline" weight={600}>
          Ref: {otpData?.ref_no}
        </Text>

        <OtpInput
          ref={(ref) => (otpInputRef.current = ref)}
          autoComplete="off"
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

        <Button
          loading={isLoading}
          type="primary"
          onClick={() => {
            if (otp?.length === 6 && otp !== undefined) {
              submitOtp(
                {
                  ref_code: otpData?.ref_no,
                  pin: otp,
                  token: otpData?.token,
                  app_name: appName,
                },
                {
                  onSuccess: (data) => {
                    if (data.status === 'success') {
                      dispatch(setOtpVerify(true))
                      message.success('OTP verified successfully')
                      onClose?.()
                    } else {
                      message.error(`OTP verified failed: ${data.error_message}`)
                    }
                  },
                  onError: (error) => {
                    message.error(error.message)
                  },
                }
              )
            } else {
              message.error('กรุณากรอกรหัส OTP ให้ครบ 6 หลัก')
            }
          }}
        >
          ส่งรหัส
        </Button>
      </MobileOTPInputModalContainer>
    </Modal>
  )

  function renderOTPResendSection() {
    if (!resentOTPButtonDisabled) {
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
            onCountDownCompleted={() => setResentOTPButtonDisabled(true)}
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
          setResentOTPButtonDisabled(false)
          setOTP('')

          requestOtp(
            { mobile: phoneNumber || '', app_name: appName || '' },
            {
              onSuccess: (data) => {
                if (data.status === 'success') {
                  message.success('OTP sent successfully')
                  dispatch(setOtpData(data))
                } else {
                  if (data.error_message) {
                    message.error(data.error_message)
                  } else {
                    message.error('OTP sent failed')
                  }
                }
              },
              onError: (error: any) => {
                message.error(error.message)
              },
            }
          )
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
