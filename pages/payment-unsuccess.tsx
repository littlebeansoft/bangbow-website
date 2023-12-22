import type { NextPage } from 'next'

import { Button, Result, Typography } from 'antd'
import { useRouter } from 'next/router'
import { CloseCircleOutlined } from '@ant-design/icons'

import { getPageTypeTheme } from 'helpers/utils'

import color from 'constants/color'
import PageLayoutRetail from 'layouts/PageLayoutRetail'

const PaymentUnsuccessPage: NextPage = () => {
  const router = useRouter()

  const page = getPageTypeTheme(router.asPath)

  const isIos =
    typeof window !== 'undefined'
      ? /iPad|iPhone|iPod/.test(navigator.userAgent)
      : false

  const link = 'kttshopping://ktt_shopping.com/main'

  const website = 'https://ktt-manufacture-web.azurewebsites.net'

  return (
    <PageLayoutRetail title="ส่งข้อมูลสำเร็จ | แบ่งเบา">
      <Result
        title="ชำระเงินไม่สำเร็จ"
        icon={
          <CloseCircleOutlined
            style={{
              fontSize: 180,
              color: 'red',
              marginBottom: 20,
            }}
          />
        }
        extra={
          [
            // <Button
            //   key="application"
            //   type="primary"
            //   block
            //   style={{ marginBottom: 40 }}
            //   onClick={() => {
            //     window.location.href = link
            //   }}
            // >
            //   ไปที่แอปพลิเคชั่นแบ่งเบา
            // </Button>,
            // <Button
            //   key="website"
            //   block
            //   onClick={() => {
            //     window.location.href = website
            //   }}
            // >
            //   ดำเนินการต่อในเว็บไซต์
            // </Button>,
          ]
        }
      />
      <Typography.Text style={{ textAlign: 'center', marginBottom: 50 }}>
        กรุณาลองให่อีกครั้งในภายหลัง หากมีข้อส่งสัยกรุณาติดเจ้าหน้าที่
      </Typography.Text>
    </PageLayoutRetail>
  )
}

export default PaymentUnsuccessPage
