import type { ItemType } from 'antd/lib/menu/hooks/useItems'

import { Button, ButtonProps, Dropdown, Menu } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const LocaleSwitchButton = (props: ButtonProps) => {
  const { pathname, query, locale, replace, defaultLocale } = useRouter()

  console.log(locale, defaultLocale)

  const localeIsEn = locale === 'en-US'

  const locales: ItemType[] = [
    {
      key: 'en-US',
      label: 'English',
    },
    {
      key: 'th-TH',
      label: 'ไทย',
    },
  ]

  const menu = (
    <Menu
      items={locales}
      onClick={({ key }) => {
        console.log('key-->', key)
        replace(
          {
            pathname,
            query,
          },
          undefined,
          {
            locale: key,
          }
        )
      }}
    />
  )

  return (
    <Dropdown overlay={menu} placement="topRight">
      <Button {...props} icon={<GlobalOutlined />}>
        {localeIsEn ? 'English' : 'ไทย'}
      </Button>
    </Dropdown>
  )
}

export default LocaleSwitchButton
