import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'

import isNumeric from 'validator/lib/isNumeric'
import isMobilePhone from 'validator/lib/isMobilePhone'
import { Input, message } from 'antd'
import { useRouter } from 'next/router'

import Text from 'components/Text'

import { getPageTypeTheme } from 'helpers/utils'
import { useAppSelector, useAppDispatch } from 'store'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useRequestOtp } from 'reactQuery/useOtp'
import { setOtpData } from 'store/slices/otpSlice'
import OTPCountDown from './MobileOTPInputModal/OTPCountDown'
import useGenerateComponentKey from 'hooks/useGenerateComponentKey'

interface PhoneNumberInputProps {
  value?: string
  onPhoneNumberChange?: (value?: string) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onVisibleMobileOTP: () => void
  visibleMobileOTP: boolean
  appName: string
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  onPhoneNumberChange,
  onVisibleMobileOTP,
  visibleMobileOTP,
  appName,
}) => {
  const router = useRouter()

  const dispatch = useAppDispatch()

  const otpVerify = useAppSelector((state) => state.otp.otpVerify)
  const [otpCountDownID, setOTPCountDownID] = useGenerateComponentKey()

  const [disableButton, setDisableButton] = useState(false)

  const [showTimer, setShowTimer] = useState(false)

  const { mutate: requestOtp } = useRequestOtp()

  const hideRequestOTPButton =
    value == null || !isMobilePhone(value) || value.length !== 10

  const page = getPageTypeTheme(router.asPath)

  const handleChangeNumberOnly = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (isNumeric(value) || value === '') {
      onChange?.(event)
      onPhoneNumberChange?.(event.target.value)
    }
  }

  return (
    <Input
      maxLength={10}
      placeholder="เบอร์โทรติดต่อ"
      value={value}
      disabled={otpVerify || visibleMobileOTP}
      suffix={
        otpVerify ? (
          <>
            <CheckCircleOutlined style={{ color: 'green' }} />
            <Text
              hidden={hideRequestOTPButton}
              page={page}
              color="primary"
              weight={500}
            >
              ยืนยันแล้ว
            </Text>
          </>
        ) : !showTimer ? (
          <Text
            hidden={hideRequestOTPButton || disableButton}
            page={page}
            color="primary"
            weight={500}
            onClick={() => {
              setDisableButton(true)
              requestOtp(
                { mobile: value || '', app_name: appName || '' },
                {
                  onSuccess: (data) => {
                    if (data.status === 'success') {
                      message.success('OTP sent successfully')
                      onVisibleMobileOTP()
                      setDisableButton(false)
                      // console.log('data', data)
                      dispatch(setOtpData(data))
                      setShowTimer(true)
                    } else {
                      if (data.description) {
                        message.error(data.description)
                      } else {
                        message.error('OTP sent failed')
                      }
                      setDisableButton(false)
                    }
                  },
                  onError: (error: any) => {
                    message.error(error.message)
                    setDisableButton(false)
                  },
                }
              )
            }}
          >
            ส่งรหัส
          </Text>
        ) : (
          <OTPCountDown
            key={otpCountDownID}
            onCountDownCompleted={() => setShowTimer(false)}
          />
        )
      }
      onChange={handleChangeNumberOnly}
    />
  )
}

export default PhoneNumberInput
