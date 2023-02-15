import { Drawer, Typography } from 'antd'
import React, { useState } from 'react'

import Text from 'components/Text'
import { getPageTypeTheme } from 'helpers/utils'
import { useRouter } from 'next/router'

import styled from '@emotion/styled'
import PrivacyPolicyTextTH from './PrivacyPolicy/PrivacyPolicyTextTH'

const DrawerPrivacyPolicy: React.FC = () => {
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
        block={false}
        page={pageType}
        color="primary"
        size="body"
        onClick={() => {
          showDrawer()
        }}
      >
        ประกาศความเป็นส่วนตัว
      </Text>
      <Drawer
        title="นโยบายความเป็นส่วนตัว"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <ContentContainer>
          <PrivacyPolicyTextTH />
        </ContentContainer>
      </Drawer>
    </>
  )
}

export default DrawerPrivacyPolicy

export const ContentContainer = styled.div`
  --gap: 60px;

  margin-top: 0px;
  padding: 0 var(--gap);
  min-height: calc(100vh - 364px);

  @media (max-width: 1420px) {
    --gap: 8px;
  }
`
