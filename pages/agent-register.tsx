import type { NextPage } from 'next'

import { Button, Checkbox, Col, Form, Input, Row } from 'antd'

import Section from 'components/Section'
import Text from 'components/Text'

import PageLayout from 'layouts/PageLayout'

import color from 'constants/color'

const AgentRegisterPage: NextPage = () => {
  return (
    <PageLayout
      title="เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิตร่วมกับเรา | แบ่งเบา"
      page="agent"
    >
      <Section>
        <Text page="agent" block color="primary" weight={500} size="headline">
          เข้าร่วมเป็นพาร์ทเนอร์ตัวแทน ร่วมกับเรา
        </Text>

        <Form>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item>
                <Input placeholder="ชื่อโรงงานของคุณ" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                <Input placeholder="ชื่อผู้ติดต่อ" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                <Input placeholder="นามสกุล" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Input
                  placeholder="เบอร์โทรผู้ติดต่อ"
                  suffix={
                    <Text
                      page="agent"
                      onClick={() => console.log('Click to request OTP')}
                      color="primary"
                    >
                      ส่งรหัส
                    </Text>
                  }
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Input placeholder="ประเภทสินค้าที่ขาย" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Input.TextArea
                  rows={4}
                  placeholder="คำอธิบายเกี่ยวกับสินค้าที่ขาย"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Checkbox>
                การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                ประกาศความเป็นส่วนตัว และข้าพเจ้าตกลงปฏิบัติตาม
                ข้อกำนดและเงื่อนไขใน การใช้บริการ
                ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
              </Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox>
                การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                ประกาศความเป็นส่วนตัว และข้าพเจ้าตกลงปฏิบัติตาม
                ข้อกำนดและเงื่อนไขใน การใช้บริการ
                ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
              </Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox>
                การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                ประกาศความเป็นส่วนตัว และข้าพเจ้าตกลงปฏิบัติตาม
                ข้อกำนดและเงื่อนไขใน การใช้บริการ
                ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
              </Checkbox>
            </Col>

            <Col span={24}>
              <Button block type="primary">
                ส่งข้อมูล
              </Button>
            </Col>

            <Col>
              <Text page="agent" size="small">
                เมื่อคลิกลงทะเบียน ข้าพเจ้ายอมรับ
                <span
                  style={{
                    color: color.primary.agent,
                    margin: '0 4px',
                  }}
                >
                  เงื่อนไขและข้อกำหนดของแบ่งเบา
                </span>
                แล้ว
              </Text>
            </Col>
          </Row>
        </Form>
      </Section>
    </PageLayout>
  )
}

export default AgentRegisterPage
