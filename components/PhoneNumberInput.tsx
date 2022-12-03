import { ChangeEvent, FC, useState } from 'react'

import isNumeric from 'validator/lib/isNumeric'
import isMobilePhone from 'validator/lib/isMobilePhone'
import { Input, message } from 'antd'
import { useRouter } from 'next/router'

import Text from 'components/Text'

import { getPageTypeTheme } from 'helpers/utils'
import { useAppSelector } from 'store'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useRequestOtp } from 'reactQuery/useOtp'

interface PhoneNumberInputProps {
  value?: string
  onPhoneNumberChange?: (value?: string) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onVisibleMobileOTP: () => void
  visibleMobileOTP: boolean
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  onPhoneNumberChange,
  onVisibleMobileOTP,
  visibleMobileOTP,
}) => {
  const router = useRouter()

  const otpVerify = useAppSelector((state) => state.otp.otpVerify)

  const [disableButton, setDisableButton] = useState(false)

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
      placeholder="เบอร์โทรผู้ติดต่อ"
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
        ) : (
          <Text
            hidden={hideRequestOTPButton || disableButton}
            page={page}
            color="primary"
            weight={500}
            onClick={() => {
              setDisableButton(true)
              // requestOtp({
              //   variables: {
              //     phoneNumber: value || '',
              //   },
              // })
              requestOtp(
                { mobile: value || '' },
                {
                  onSuccess: (data) => {
                    message.success('OTP sent successfully')
                    onVisibleMobileOTP()
                    setDisableButton(false)
                    console.log('data', data)
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
        )
      }
      onChange={handleChangeNumberOnly}
    />
  )
}

export default PhoneNumberInput
