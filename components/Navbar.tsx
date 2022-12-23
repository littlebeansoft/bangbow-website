import type { FC } from 'react'

import styled from '@emotion/styled'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Divider, Space } from 'antd'
import { useRouter } from 'next/router'

import Text from 'components/Text'
import Container from 'components/Container'

import { getPageTypeTheme } from 'helpers/utils'
import Link from 'next/link'

const Navbar: FC = () => {
  const router = useRouter()

  const pageType = getPageTypeTheme(router.asPath)

  return (
    <Container>
      <NavbarContainer>
        <Space size="large" className="title" align="center">
          {/* <MenuOutlined style={{ fontSize: 24 }} /> */}

          <Link href={pageType === 'factory' ? '/factory' : '/agent'}>
            <a>
              <Text page={pageType} color="primary" size="headline">
                แบ่งเบา
              </Text>
            </a>
          </Link>
        </Space>
        {/* <SearchOutlined style={{ fontSize: 24 }} /> */}
      </NavbarContainer>
      {/* <Divider /> */}
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
