import type { NextPage } from 'next'

import Home from 'components/Home'

import PageLayout from 'layouts/PageLayout'

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  )
}

export default HomePage
