import type { NextPage } from 'next'

import { Button, Result, Typography } from 'antd'
import { useRouter } from 'next/router'
import { CheckCircleOutlined } from '@ant-design/icons'

import { getPageTypeTheme } from 'helpers/utils'

import color from 'constants/color'
import Link from 'next/link'
import PageLayoutRetail from 'layouts/PageLayoutRetail'

const PaymentSuccessPage: NextPage = () => {
  const router = useRouter()

  const page = getPageTypeTheme(router.asPath)

  const isIos =
    typeof window !== 'undefined'
      ? /iPad|iPhone|iPod/.test(navigator.userAgent)
      : false

  const link = 'kttshopping://ktt_shopping.com/main'

  const website = 'https://ktt-manufacture-web.azurewebsites.net'

  return (
    <PageLayoutRetail title="ส่งข้อมูลสำเร็จ | ขายทั่วไทย">
      <Result
        title="ชำระเงินสำเร็จ"
        icon={
          <CheckCircleOutlined
            style={{
              fontSize: 180,
              color: 'green',
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
            //   ไปที่แอปพลิเคชั่นขายทั่วไทย
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
        กรุณตรวจสอบข้อมูลเพิ่มเติมที่ หน้าคำสังซื้อ
      </Typography.Text>
    </PageLayoutRetail>
  )
}

export default PaymentSuccessPage
