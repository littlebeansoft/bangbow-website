import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'

import AgentHome from 'components/AgentHome'

const AgentHomePage: NextPage = () => {
  return (
    <PageLayout
      title="รับคำสั่งซื้อ นัดรับสินค้า สต๊อกสินค้า ไม่มีการตัดราคา ด้วยมาตรฐานการตั้งราคาที่เท่าเทียม | แบ่งเบา"
      page="agent"
    >
      <AgentHome />
    </PageLayout>
  )
}

export default AgentHomePage
