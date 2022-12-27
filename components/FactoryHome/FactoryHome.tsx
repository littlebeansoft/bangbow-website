import type { FC } from 'react'

import { Button, Col, Collapse, Row, Space } from 'antd'
import Link from 'next/link'
import styled from '@emotion/styled'

import Text from 'components/Text'
import Service from 'components/Service'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'
import Bullet, { BulletItem } from 'components/Bullet'

import type { ServiceItem } from 'components/Service'

const { Panel } = Collapse

const listServices: ServiceItem[] = [
  {
    id: 0,
    icon: '/purple-dollar.svg',
    title: 'ราคาเท่าเทียม',
    description:
      'ฟลุทครูเสด กาญจนาภิเษกโอเพ่น ติ๋มซูเปอร์ไทม์ อัตลักษณ์ไทม์ครูเสด พอเพียงอัลบั้มแชมเปี้ยนสไตรค์ มุมมองบ๋อยสะบึมแพนงเชิญ เซ็นเซอร์เลกเชอร์ ',
  },
  {
    id: 1,
    icon: '/purple-dollar.svg',
    title: 'ราคาเท่าเทียม',
    description:
      'ฟลุทครูเสด กาญจนาภิเษกโอเพ่น ติ๋มซูเปอร์ไทม์ อัตลักษณ์ไทม์ครูเสด พอเพียงอัลบั้มแชมเปี้ยนสไตรค์ มุมมองบ๋อยสะบึมแพนงเชิญ เซ็นเซอร์เลกเชอร์ ',
  },
  {
    id: 2,
    icon: '/purple-dollar.svg',
    title: 'ราคาเท่าเทียม',
    description:
      'ฟลุทครูเสด กาญจนาภิเษกโอเพ่น ติ๋มซูเปอร์ไทม์ อัตลักษณ์ไทม์ครูเสด พอเพียงอัลบั้มแชมเปี้ยนสไตรค์ มุมมองบ๋อยสะบึมแพนงเชิญ เซ็นเซอร์เลกเชอร์ ',
  },
]

const listStepsToRegister: Omit<BulletItem, 'index'>[] = [
  {
    title: 'ราคาเท่าเทียม',
    description:
      'ฟลุทครูเสด กาญจนาภิเษกโอเพ่น ติ๋มซูเปอร์ไทม์ อัตลักษณ์ไทม์ครูเสด พอเพียงอัลบั้มแชมเปี้ยนสไตรค์ มุมมองบ๋อยสะบึมแพนงเชิญ เซ็นเซอร์เลกเชอร์ ',
  },
  {
    title: 'ราคาเท่าเทียม',
    description:
      'ฟลุทครูเสด กาญจนาภิเษกโอเพ่น ติ๋มซูเปอร์ไทม์ อัตลักษณ์ไทม์ครูเสด พอเพียงอัลบั้มแชมเปี้ยนสไตรค์ มุมมองบ๋อยสะบึมแพนงเชิญ เซ็นเซอร์เลกเชอร์ ',
  },
  {
    title: 'ราคาเท่าเทียม',
    description:
      'ฟลุทครูเสด กาญจนาภิเษกโอเพ่น ติ๋มซูเปอร์ไทม์ อัตลักษณ์ไทม์ครูเสด พอเพียงอัลบั้มแชมเปี้ยนสไตรค์ มุมมองบ๋อยสะบึมแพนงเชิญ เซ็นเซอร์เลกเชอร์ ',
  },
]

const FactoryHome: FC = () => {
  return (
    <div>
      <Section>
        <HeroTextContainer>
          <Text block color="primary" weight={500} size="headline">
            รับสมัครผู้ผลิต! {" "}
          </Text>
          <Text color="primary" size="small">
            รับคำสั่งซื้อ นัดรับสินค้า สต๊อกสินค้า ไม่มีการตัดราคา
            ด้วยมาตรฐานการตั้งราคาที่เท่าเทียม
          </Text>
        </HeroTextContainer>

        <Space direction="vertical" size={12}>
          <Link href="/factory-register">
            <a>
              <Button
                type="primary"
                shape="round"
                style={{ fontSize: 18, width: 122 }}
              >
                สมัครเลย
              </Button>
            </a>
          </Link>
          <Button shape="round" style={{ fontSize: 12, width: 122 }} onClick={()=>{
            window.location.hash = '#anchor-faq'
          }} >
            คำถามที่พบบ่อย
          </Button>
        </Space>
      </Section>

      <Section>
        <SectionHeader icon="/factory-whale.png">
          ทำไมต้องสมัคร เป็นตัวแทน ของแบ่งเบา
        </SectionHeader>

        <Row gutter={[32, 32]}>
          {listServices.map((item) => (
            <Col key={item.id} span={24}>
              <Service data={item} />
            </Col>
          ))}
        </Row>
      </Section>

      <Section>
        <SectionHeader icon="/sea.svg" textPosition="100px">
          ขั้นตอนการสมัคร เป็นตัวแทนของ แบ่งเบา
        </SectionHeader>

        <Row gutter={[32, 32]}>
          {listStepsToRegister.map((item, index) => {
            const data: BulletItem = {
              ...item,
              index,
            }

            return (
              <Col key={index} span={24}>
                <Bullet data={data} />
              </Col>
            )
          })}
        </Row>
      </Section>

      <Section>
        <div id="anchor-faq" >
        <Text
          block
          align="center"
          size="headline"
          color="primary"
          weight="bold"
        >
          คำถามที่พบบ่อย
        </Text>
        </div>

        <Collapse bordered>
          <Panel header="คำถามที่ 1" key="1">
            <p>คำตอบที่ 1</p>
          </Panel>
          <Panel header="คำถามที่ 2" key="2">
            <p>คำตอบที่ 1</p>
          </Panel>
          <Panel header="คำถามที่ 3" key="3">
            <p>คำตอบที่ 1</p>
          </Panel>
        </Collapse>
      </Section>
    </div>
  )
}

export default FactoryHome

const HeroTextContainer = styled.div`
  margin-bottom: 32px;
`
