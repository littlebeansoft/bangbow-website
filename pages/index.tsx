import type { NextPage } from 'next'

import Home from 'components/Home'

import PageLayout from 'layouts/PageLayout'

const HomePage: NextPage = () => {
  return (
    <PageLayout title="โรงงาน | แบ่งเบา">
      <Home />
    </PageLayout>
  )
}

export default HomePage
