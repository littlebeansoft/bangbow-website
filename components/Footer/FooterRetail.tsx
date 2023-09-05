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

const FooterRetail: FC = () => {
  const router = useRouter()

  const pageType = getPageTypeTheme(router.asPath)

  const icon =
    pageType === 'agent' ? '/facebook-agent.svg' : '/facebook-factory.svg'

  const iconStyle: CSSProperties = {
    color: color.primary[pageType],
    fontSize: 24,
  }

  const concept =
    pageType === 'agent'
      ? 'ยินดีต้อนรับสู่ครอบครัวแบ่งเบา (Bangbow) รอบๆ ตัวท่านมีร้านค้ามากมายที่เป็นโอกาสรอท่านอยู่ ให้ท่านได้สร้างและมีอาชีพเพิ่มอีก 1 อาชีพ ในการนำเสนอสินค้าต่างๆ จาก Platform แบ่งเบาของเรา เพราะเราเข้าใจในความลำบากในเศรษฐกิจในยุคนี้ดี และอะไรจะดีเท่าการทำธุรกิจค้าส่ง B2B ที่เราได้เป็นเจ้าของเอง ดูแลร้านค้าเหล่านั้นให้ดี และท่านจะได้พบกับโอกาสดีๆ ที่รอท่านอยู่ ร่วมเป็นครอบครัวเดียวกับเราแล้วท่านจะเข้าใจว่าเราจะช่วย “แบ่งเบา” ให้ท่านได้อย่างไร'
      : 'ยินดีต้อนรับสู่ครอบครัวแบ่งเบา (Bangbow) แบ่งเบาเกิดขึ้นมาเนื่องจากเราเคยเป็นผู้ผลิตและเรารับรู้ถึงความต้องการในการของโรงงานผู้ผลิต SME ของพวกเราเป็นอย่างดี เราจึงสร้าง Platform เพื่อช่วยให้ทั้งกระบวนการของพวกเราได้ช่วยเหลือ ได้สร้างงาน ได้เพิ่มช่องทางการจัดจำหน่าย เพิ่มยอดขายเป็นธรรมและไม่ถูกเอารัดเอาเปรียบ โดยมีตัวแทนจำหน่ายทั่วประเทศช่วยทำการขายให้ท่านได้เบาใจ เบาแรง และแบ่งเบาให้ท่านได้ Focus ในการผลิตที่ท่านถนัดให้มีประสิทธิภาพ เรามาช่วยการสร้างสังคมแห่งการแบ่งปันร่วมกัน มาอยู่ครอบครัวเดียวกับเรา “แบ่งเบา”  '

  //const titleType = pageType === 'agent' ? 'ตัวแทนจำหน่าย' : 'โรงงาน ผู้ผลิต'

  const linkPrivacyPolicy =
    pageType === 'agent'
      ? '/agent-privacy-policy-th'
      : '/factory-privacy-policy-th'
  const linkTermsOfUse =
    pageType === 'agent' ? '/agent-terms-of-use' : '/factory-terms-of-use'

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

          <p>{concept}</p>

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
                <Link href="tel:0868263999">
                  <Text color="black" size="small">
                    086-826-3999
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
                <Link href="https://www.facebook.com/bangbowdotcom/">
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
            <Link href={linkTermsOfUse}>
              <Text color="white" size="small">
                ข้อตกลงและเงื่อนไขการใช้งาน
              </Text>
            </Link>
            <Link href={linkPrivacyPolicy}>
              <Text color="white" size="small">
                ความเป็นส่วนตัว
              </Text>
            </Link>
          </Space>

          <Text color="white" size="small">
            <CopyrightCircleOutlined /> Bangbow 2023
          </Text>
        </Container>
      </CopyrightSectionContainer>
    </FooterContainer>
  )
}

export default FooterRetail

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
