import type { NextPage } from 'next'
import type { Rule } from 'antd/lib/form'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd'

import Section from 'components/Section'
import Text from 'components/Text'
import MobileOTPInputModal from 'components/MobileOTPInputModal'
import PhoneNumberInput from 'components/PhoneNumberInput'

import PageLayout from 'layouts/PageLayout'

import { searchOptionsByLabel } from 'helpers/antdUtils'

import color from 'constants/color'

const options = [
  {
    label: 'ผัก/ผลไม้สด',
    value: 1,
  },
  {
    label: 'อาหารดอง',
    value: 2,
  },
  {
    label: 'เสื้อผ้า',
    value: 3,
  },
  {
    label: 'อาหารแปรรูป',
    value: 4,
  },
  {
    label: 'เครื่องใช้',
    value: 5,
  },
  {
    label: 'อุปกรณ์ทำครัว',
    value: 6,
  },
]

const FactoryRegisterPage: NextPage = () => {
  const router = useRouter()

  const [phoneNumber, setPhoneNumber] = useState<string>()

  const [visibleMobileOTP, setVisibleMobileOTP] = useState(false)

  const ruleRequired: Rule = {
    required: true,
    message: 'โปรดระบุ',
  }

  return (
    <PageLayout title="เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิตร่วมกับเรา | แบ่งเบา">
      <Section>
        <Text block color="primary" weight={500} size="headline">
          เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิต ร่วมกับเรา
        </Text>

        <Form
          scrollToFirstError
          autoComplete="off"
          onFinish={() => router.push('/factory-register-success')}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item name="factoryName" rules={[ruleRequired]}>
                <Input placeholder="ชื่อโรงงานของคุณ" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="firstName" rules={[ruleRequired]}>
                <Input placeholder="ชื่อผู้ติดต่อ" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="lastName" rules={[ruleRequired]}>
                <Input placeholder="นามสกุล" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="phoneNumber" rules={[ruleRequired]}>
                <PhoneNumberInput
                  onPhoneNumberChange={setPhoneNumber}
                  onVisibleMobileOTP={() => setVisibleMobileOTP(true)}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="productType" rules={[ruleRequired]}>
                <Select
                  showSearch
                  placeholder="ประเภทสินค้าที่ขาย"
                  options={options}
                  filterOption={searchOptionsByLabel}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="productDetail" rules={[ruleRequired]}>
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
              <Button block type="primary" htmlType="submit">
                ส่งข้อมูล
              </Button>
            </Col>

            <Col>
              <Text size="small">
                เมื่อคลิกลงทะเบียน ข้าพเจ้ายอมรับ
                <span
                  style={{
                    color: color.primary.factory,
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

      <MobileOTPInputModal
        phoneNumber={phoneNumber}
        visible={visibleMobileOTP}
        onClose={() => setVisibleMobileOTP(false)}
      />
    </PageLayout>
  )
}

export default FactoryRegisterPage
