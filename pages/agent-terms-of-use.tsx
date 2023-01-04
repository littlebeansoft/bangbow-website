import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import { Typography } from 'antd'
import TermsText from 'components/Terms/TermsText'

const AgentTermsOfUsePage: NextPage = () => {
  return (
    <PageLayout title='ข้อตกลงและเงื่อนไขการใช้บริการ' page='agent' >
      <ContentContainer>
        <TermsText />
      </ContentContainer>
    </PageLayout>
  )
}

export default AgentTermsOfUsePage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 10px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
  `
 
