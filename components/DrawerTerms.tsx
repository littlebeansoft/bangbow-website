import { Button, Drawer, Modal, Typography } from 'antd'
import React, { FC, useEffect, useState } from 'react'

import Text from 'components/Text'
import { getPageTypeTheme } from 'helpers/utils'
import { useRouter } from 'next/router'

import styled from '@emotion/styled'
import TermsText from './Terms/TermsText'

interface DrawerTermsProps {
  show: Boolean
  onClose: () => void
  handleCheckTerm: () => void
}

const DrawerTerms: FC<DrawerTermsProps> = ({
  show,
  onClose,
  handleCheckTerm,
}) => {
  const [open, setOpen] = useState(false)

  const handleOk = () => {
    onClose()
    handleCheckTerm()
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
    onClose()
  }

  useEffect(() => {
    if (show === true) {
      setOpen(true)
    }
  }, [show])

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button> */}
      <Modal
        open={open}
        title="ข้อตกลงและเงื่อนไขการใช้งาน"
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ top: 0 }}
        maskClosable={false}
        footer={[
          <div style={{ display: 'flex', width: '100' }} key={'122222'}>
            <Button
              style={{ width: '100%' }}
              key="submit"
              type="primary"
              onClick={handleOk}
            >
              ยอมรับข้อตกลงและเงื่อนไข
            </Button>
          </div>,
        ]}
      >
        <div style={{ width: '100%', overflow: 'auto', height: '55vh' }}>
          <TermsText />
        </div>
      </Modal>
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
