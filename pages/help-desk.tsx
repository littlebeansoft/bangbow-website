import type { NextPage } from 'next'

import PageLayout from 'layouts/PageLayout'
import styled from '@emotion/styled'
import HelpDeskText from 'components/HelpDesk/HelpDeskText'
import PageLayoutRetail from 'layouts/PageLayoutRetail'
import PageLayoutNoHead from 'layouts/PageLayoutNoHead'

const HelpDeskPage: NextPage = () => {
  return (
    <PageLayoutNoHead title="ศูนย์ช่วยเหลือลูกค้าแบ่งเบา">
      <ContentContainer>
        <HelpDeskText />
      </ContentContainer>
    </PageLayoutNoHead>
  )
}

export default HelpDeskPage

export const ContentContainer = styled.div`


  margin-top: 10px;

`
