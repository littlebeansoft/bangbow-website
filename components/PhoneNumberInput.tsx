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
  setOtpErrorMessage: (value: string | null) => void
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  onPhoneNumberChange,
  onVisibleMobileOTP,
  visibleMobileOTP,
  appName,
  setOtpErrorMessage,
}) => {
  const router = useRouter()

  const dispatch = useAppDispatch()

  const otpVerify = useAppSelector((state) => state.otp.otpVerify)
  const [otpCountDownID, setOTPCountDownID] = useGenerateComponentKey()

  const [disableButton, setDisableButton] = useState(false)

  const [textPhoneNumber, setTextPhoneNumber] = useState('')

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
    setOtpErrorMessage('กรุณากรอกเบอร์โทร และกดส่งรหัส เพื่อยืนยัน OTP')
  }

  useEffect(() => {
    if (otpVerify && value) {
      const textPhoneNumber = value.replace(
        /(\d{2})(\d{5})(\d{2})/,
        '$1x-xxx-x$3'
      )
      setTextPhoneNumber(textPhoneNumber)

      setOtpErrorMessage(null)
    }
  }, [otpVerify])

  return (
    <Input
      maxLength={10}
      placeholder="เบอร์โทรติดต่อ"
      value={otpVerify ? textPhoneNumber : value}
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
                      dispatch(setOtpData(data))
                      setShowTimer(true)
                    } else {
                      if (data.error_message) {
                        message.error(data.error_message)
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
            onCountDownCompleted={() => {
              // console.log('onCountDownCompleted show Text ส่งรหัส');
              setShowTimer(false)
            }}
          />
        )
      }
      onChange={handleChangeNumberOnly}
    />
  )
}

export default PhoneNumberInput
