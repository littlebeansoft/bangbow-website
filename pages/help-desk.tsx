import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import HelpDeskText from 'components/HelpDesk/HelpDeskText'
import PageLayoutRetail from 'layouts/PageLayoutRetail'

const HelpDeskPage: NextPage = () => {
  return (
    <PageLayoutRetail title="ศูนย์ช่วยเหลือลูกค้าแบ่งเบา">
      <ContentContainer>
        <HelpDeskText />
      </ContentContainer>
    </PageLayoutRetail>
  )
}

export default HelpDeskPage

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 10px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 24px;
  }
`
