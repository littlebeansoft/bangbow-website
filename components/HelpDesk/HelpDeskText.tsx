import { Typography } from 'antd'
import { FC } from 'react'
import PurchasingProducts from './PurchasingProducts'
import styled from 'styled-components'

const HelpDeskText: FC = () => {
  return (
    <>
      <Typography.Title style={{ marginLeft: 10 }} level={5}>
        คำถามที่พบบ่อย
      </Typography.Title>
      <PurchasingProducts />
    </>
  )
}

export default HelpDeskText

const TextWrapper = styled.div`
  margin-right: 10px;
`
