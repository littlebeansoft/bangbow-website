import type { ChangeEvent, FC } from 'react'

import isNumeric from 'validator/lib/isNumeric'
import isMobilePhone from 'validator/lib/isMobilePhone'
import { Input } from 'antd'
import { useRouter } from 'next/router'

import Text from 'components/Text'

import { getPageTypeTheme } from 'helpers/utils'

interface PhoneNumberInputProps {
  value?: string
  onPhoneNumberChange?: (value?: string) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onVisibleMobileOTP: () => void
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  onPhoneNumberChange,
  onVisibleMobileOTP,
}) => {
  const router = useRouter()

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
      suffix={
        <Text
          hidden={hideRequestOTPButton}
          page={page}
          color="primary"
          weight={500}
          onClick={onVisibleMobileOTP}
        >
          ส่งรหัส
        </Text>
      }
      onChange={handleChangeNumberOnly}
    />
  )
}

export default PhoneNumberInput
