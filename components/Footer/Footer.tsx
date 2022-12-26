import type { CSSProperties, FC } from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  CopyrightCircleOutlined,
  FacebookFilled,
  MailOutlined,
  PhoneOutlined,
} from '@ant-design/icons'
import { Col, Row, Space } from 'antd'
import Image from 'next/image'

import Container from 'components/Container'
import Text from 'components/Text'
import color from 'constants/color'
import { useRouter } from 'next/router'
import { getPageTypeTheme } from 'helpers/utils'
import Link from 'next/link'

const Footer: FC = () => {
  const router = useRouter()

  const pageType = getPageTypeTheme(router.asPath)

  const icon =
    pageType === 'agent' ? '/facebook-agent.svg' : '/facebook-factory.svg'

  const iconStyle: CSSProperties = {
    color: color.primary[pageType],
    fontSize: 24,
  }

  return (
    <FooterContainer>
      <ContactSectionContainer>
        <Container>
          <Text
            page={pageType}
            color="primary"
            size="headline"
            style={{ marginBottom: 8 }}
          >
            แบ่งเบา
          </Text>

          <p>concept</p>

          <Row gutter={[12, 12]} style={{ marginTop: 32 }}>
            <Col span={24}>
              <p>สามารถติดต่อเราได้ที่</p>
            </Col>
            <Col span={24}>
              <Space size="large">
                <PhoneOutlined
                  style={{
                    ...iconStyle,
                    transform: 'scaleX(-1)',
                  }}
                />
                <Link href="tel:021231234">
                  <Text color="black" size="small">
                    02-123-1234
                  </Text>
                </Link>
              </Space>
            </Col>
            <Col span={24}>
              <Space size="large">
                <MailOutlined style={iconStyle} />
                <Link href="mailto:contact@bangbow.com">
                  <Text color="black" size="small">
                    contact@bangbow.com
                  </Text>
                </Link>
              </Space>
            </Col>
            <Col span={24}>
              <Space size="large">
                <Image
                  src={icon}
                  alt="Bangbow facebook"
                  width="26px"
                  height="26px"
                />
                <Link href="https://www.facebook.com/Littlebeansoft/">
                  <a target="_blank" rel="noopener noreferrer">
                    <Text color="black" size="small">
                      Bangbow
                    </Text>
                  </a>
                </Link>
              </Space>
            </Col>
          </Row>
        </Container>
      </ContactSectionContainer>

      <CopyrightSectionContainer>
        <Container>
          <Space size="large">
          <Link href="/terms-of-use">
            <Text color="white" size="small">
              ข้อตกลงและเงื่อนไขการใช้งาน
            </Text>
            </Link>
            <Link href="/privacy-policy-th">

              <Text color="white" size="small">
                ความเป็นส่วนตัว
              </Text>
   
            </Link>
          </Space>

          <Text color="white" size="small">
            <CopyrightCircleOutlined /> Bangbow 2022
          </Text>
        </Container>
      </CopyrightSectionContainer>
    </FooterContainer>
  )
}

export default Footer

const footerStyle = css`
  padding-top: 16px;
  padding-bottom: 16px;
`

const FooterContainer = styled.div`
  width: 100%;
`

const ContactSectionContainer = styled.div`
  ${footerStyle}

  background: #edecec;
`

const CopyrightSectionContainer = styled.div`
  ${footerStyle}

  background: #353535;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  & > * {
    color: #fff;
  }
`
