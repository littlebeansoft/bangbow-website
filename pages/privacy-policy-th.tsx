import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import PrivacyPolicyTextTH from 'components/PrivacyPolicy/PrivacyPolicyTextTH'
import PageLayoutRetail from 'layouts/PageLayoutRetail'

const FactoryPrivacyPolicyTHPage: NextPage = () => {
  return (
    <PageLayoutRetail title="การคุ้มครองข้อมูลส่วนบุคคล">
      <ContentContainer>
        <PrivacyPolicyTextTH />
      </ContentContainer>
    </PageLayoutRetail>
  )
}

export default FactoryPrivacyPolicyTHPage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 10px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
`
