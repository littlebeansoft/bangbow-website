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
          >
            ไปที่แอปพลิเคชั่นแบ่งเบา
          </Button>,
          <Button key="website" block>
            ดำเนินการต่อในเว็บไซต์
          </Button>,
        ]}
      />
    </PageLayout>
  )
}

export default AgentRegisterSuccessPage
