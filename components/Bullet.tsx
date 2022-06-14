import type { FC } from 'react'

import styled from '@emotion/styled'
import { Col, Row, Space } from 'antd'

import color from 'constants/color'

import Text from 'components/Text'

export interface BulletItem {
  index: number
  title: string
  description: string
}

interface BulletProps {
  data: BulletItem
}

const Bullet: FC<BulletProps> = ({ data }) => {
  const { index, title, description } = data

  return (
    <Row gutter={[16, 16]}>
      <Col>
        <Space size="large">
          <BulletNumber>{index + 1}</BulletNumber>
          <Text size="headline" weight="bold">
            {title}
          </Text>
        </Space>
      </Col>
      <Col>
        <Text size="body">{description}</Text>
      </Col>
    </Row>
  )
}

export default Bullet

const BulletNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 32;
  background: ${color.primary};
  width: 54px;
  height: 54px;
  border-radius: 20px;
`
