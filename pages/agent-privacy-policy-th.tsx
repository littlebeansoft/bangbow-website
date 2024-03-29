import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import PrivacyPolicyTextTH from 'components/PrivacyPolicy/PrivacyPolicyTextTH'

const AgentPrivacyPolicyTHPage: NextPage = () => {
  return (
    <PageLayout title="การคุ้มครองข้อมูลส่วนบุคคล" page="agent">
      <ContentContainer>
        <PrivacyPolicyTextTH />
      </ContentContainer>
    </PageLayout>
  )
}

export default AgentPrivacyPolicyTHPage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 10px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
`
