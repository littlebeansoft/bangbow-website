import type { NextPage } from 'next'

import FactoryHome from 'components/FactoryHome'

import PageLayout from 'layouts/PageLayout'

const FactoryHomePage: NextPage = () => {
  return (
    <PageLayout title="รับคำสั่งซื้อ นัดรับสินค้า สต๊อกสินค้า ไม่มีการตัดราคา ด้วยมาตรฐานการตั้งราคาที่เท่าเทียม | แบ่งเบา">
      <FactoryHome />
    </PageLayout>
  )
}

export default FactoryHomePage
