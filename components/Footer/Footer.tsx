import type { CSSProperties, FC } from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  CopyrightCircleOutlined,
  FacebookFilled,
  MailFilled,
  PhoneFilled,
} from '@ant-design/icons'
import { Col, Row, Space } from 'antd'

import Container from 'components/Container'
import Text from 'components/Text'
import color from 'constants/color'
import { useRouter } from 'next/router'
import { getPageTypeTheme } from 'helpers/utils'

const Footer: FC = () => {
  const router = useRouter()

  const pageType = getPageTypeTheme(router.asPath)

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

          <p>Lorem</p>

          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Space size="large">
                <PhoneFilled
                  style={{
                    ...iconStyle,
                    transform: 'scaleX(-1)',
                  }}
                />
                02-123-1234
              </Space>
            </Col>
            <Col span={24}>
              <Space size="large">
                <MailFilled style={iconStyle} />
                contact@bangbow.com
              </Space>
            </Col>
            <Col span={24}>
              <Space size="large">
                <FacebookFilled style={iconStyle} />
                Bangbow
              </Space>
            </Col>
          </Row>
        </Container>
      </ContactSectionContainer>

      <CopyrightSectionContainer>
        <Container>
          <Space size="large">
            <Text color="white" size="small">
              ข้อตกลงและเงื่อนไขการใช้งาน
            </Text>
            <Text color="white" size="small">
              ความเป็นส่วนตัว
            </Text>
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
