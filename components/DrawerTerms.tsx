import { Drawer, Typography } from 'antd'
import React, { useState } from 'react'

import Text from 'components/Text'
import { getPageTypeTheme } from 'helpers/utils'
import { useRouter } from 'next/router'

import styled from '@emotion/styled'
import TermsText from './Terms/TermsText'

const DrawerTerms: React.FC = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const pageType = getPageTypeTheme(router.asPath)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Text
        page={pageType}
        color="primary"
        size="body"
        onClick={() => {
          showDrawer()
        }}
      >
        ข้อตกลงและเงื่อนไขการใช้บริการ
      </Text>
      <Drawer
        title="ข้อตกลงและเงื่อนไขการใช้บริการ"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <ContentContainer>
          <TermsText />
        </ContentContainer>
      </Drawer>
    </>
  )
}

export default DrawerTerms

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 0px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 8px;
  }
`
