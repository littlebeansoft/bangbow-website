import type { FC } from 'react'
import Image from 'next/image'

import styled from '@emotion/styled'
import { MenuOutlined, SearchOutlined, CloseOutlined } from '@ant-design/icons'
import { Divider, Space } from 'antd'
import { useRouter } from 'next/router'

import Text from 'components/Text'
import Container from 'components/Container'

import { getPageTypeTheme } from 'helpers/utils'
import Link from 'next/link'

interface NavbarProps {
  back?: boolean
}

const Navbar: FC<NavbarProps> = ({ back }) => {
  const router = useRouter()

  const pageType = getPageTypeTheme(router.asPath)

  return (
    <Container>
      <NavbarContainer>
        <Space size="small" className="title" align="center">
          <Link href={pageType === 'factory' ? '/factory' : '/agent'}>
            <Image
              src={
                pageType === 'factory' ? '/icon-factory.svg' : '/icon-agent.svg'
              }
              alt="Bangbow Logo"
              width={40}
              height={40}
              style={{ cursor: 'pointer' }}
            />
          </Link>

          <Link href={pageType === 'factory' ? '/factory' : '/agent'}>
            <a>
              <Text page={pageType} color="primary" size="headline">
                แบ่งเบา
              </Text>
            </a>
          </Link>
        </Space>
        {back ? (
          <CloseOutlined
            style={{ fontSize: 18 }}
            onClick={() => {
              history.back()
            }}
          />
        ) : null}
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
  padding: 16px 16px 8px 16px;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 16px;

  & > .title {
    p {
      margin: 0;
      font-size: 24px;
    }
  }
`
