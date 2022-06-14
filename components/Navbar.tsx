import type { FC } from 'react'

import styled from '@emotion/styled'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Space } from 'antd'

import Text from 'components/Text'
import Container from 'components/Container'

const Navbar: FC = () => {
  return (
    <Container>
      <NavbarContainer>
        <Space size="large" className="title" align="center">
          <MenuOutlined style={{ fontSize: 24 }} />
          <Text color="primary" size="headline">
            แบ่งเบา
          </Text>
        </Space>
        <SearchOutlined style={{ fontSize: 24 }} />
      </NavbarContainer>
    </Container>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;

  & > .title {
    p {
      margin: 0;
      font-size: 24px;
    }
  }
`
