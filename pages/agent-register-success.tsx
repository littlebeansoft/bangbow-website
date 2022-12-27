import type { NextPage } from 'next'

import { Button, Result } from 'antd'
import { useRouter } from 'next/router'
import { CheckCircleOutlined } from '@ant-design/icons'

import PageLayout from 'layouts/PageLayout'

import { getPageTypeTheme } from 'helpers/utils'

import color from 'constants/color'

const AgentRegisterSuccessPage: NextPage = () => {
  const router = useRouter()

  const page = getPageTypeTheme(router.asPath)

  const isIos =
    typeof window !== 'undefined'
      ? /iPad|iPhone|iPod/.test(navigator.userAgent)
      : false

  const link = isIos
    ? 'https://apps.apple.com/th/app/youtube/id544007664?l=th'
    : 'https://play.google.com/store/apps/details?id=com.google.android.youtube'

  const website = 'https://www.bangbow.com/'

  return (
    <PageLayout title="ส่งข้อมูลสำเร็จ | แบ่งเบา">
      <Result
        title="แบ่งเบาได้รับข้อมูลของท่านแล้ว จะมีการติดต่อกลับภายใน 3 วัน"
        icon={
          <CheckCircleOutlined
            style={{
              fontSize: 180,
              color: color.primary[page],
            }}
          />
        }
        extra={[
          <Button
            key="application"
            type="primary"
            block
            style={{ marginBottom: 24 }}
            onClick={() => {
              window.location.href = link
            }}
          >
            ไปที่แอปพลิเคชั่นแบ่งเบา
          </Button>,
          <Button
            key="website"
            block
            onClick={() => {
              window.location.href = website
            }}
          >
            ดำเนินการต่อในเว็บไซต์
          </Button>,
        ]}
      />
    </PageLayout>
  )
}

export default AgentRegisterSuccessPage
