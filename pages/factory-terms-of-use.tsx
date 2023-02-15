import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import TermsText from 'components/Terms/TermsText'

const FactoryTermsOfUsePage: NextPage = () => {
  return (
    <PageLayout title="ข้อตกลงและเงื่อนไขการใช้บริการ">
      <ContentContainer>
        <TermsText />
      </ContentContainer>
    </PageLayout>
  )
}

export default FactoryTermsOfUsePage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 10px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
`
