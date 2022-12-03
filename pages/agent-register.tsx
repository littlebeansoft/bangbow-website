import type { NextPage } from 'next'
import type { Rule } from 'antd/lib/form'

import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Select,
  Spin,
} from 'antd'

import Section from 'components/Section'
import Text from 'components/Text'
import PhoneNumberInput from 'components/PhoneNumberInput'
import MobileOTPInputModal from 'components/MobileOTPInputModal'

import PageLayout from 'layouts/PageLayout'

//import { searchOptionsByLabel } from 'helpers/antdUtils'

import color from 'constants/color'
import { RuleObject } from 'rc-field-form/lib/interface'
import { useAppSelector } from 'store'
import Link from 'next/link'

const { Option } = Select

const AgentRegisterPage: NextPage = () => {
  const router = useRouter()
  const [form] = Form.useForm()

  const otpVerify = useAppSelector((state) => state.otp.otpVerify)

  const [phoneNumber, setPhoneNumber] = useState<string>()
  const [visibleMobileOTP, setVisibleMobileOTP] = useState(false)
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const [checkPrivate, setCheckPrivate] = useState(false)
  const [checkService, setCheckService] = useState(false)
  const [checkTerm, setCheckTerm] = useState(false)
  const [category, setCategory] = useState<[]>([])

  const timer = useRef<ReturnType<typeof setTimeout>>()

  const ruleRequired: Rule = {
    required: true,
    message: 'โปรดระบุ',
  }

  const validation = (
    rule: RuleObject,
    value: any,
    callback: (error?: string) => void
  ) => {
    if (checkPrivate || checkService) {
      return callback()
    }
    return callback('Please accept the terms and conditions')
  }

  const onSearch = (value: string) => {
    clearTimeout(timer.current!)

    timer.current = setTimeout(() => {
      setSearchValue(value)
    }, 500)
  }

  // const categoryList = useGetCategory({
  //   context: {
  //     clientType: 'LABEL',
  //     headers: {
  //       credentialKey: 'BANG_BOW_ADMIN',
  //     },
  //   },
  //   fetchPolicy: 'cache-first',
  //   variables: {
  //     input: {
  //       query: {
  //         name: searchValue,
  //         status: 'ENABLED',
  //       },
  //       pagination: {
  //         limit: 30,
  //         page: 1,
  //       },
  //     },
  //   },
  //   onCompleted: (data) => {
  //     setCategory(data.getCategory.payload)
  //   },
  // })

  // const [createLeadNonAuthen, { loading }] = useCreateLeadNonAuthenMutation({
  //   context: {
  //     clientType: 'CUSTOMER',
  //     headers: {
  //       credentialKey: 'BANG_BOW_ADMIN',
  //     },
  //   },
  //   onCompleted: () => {
  //     message.success('สมัครสมาชิกเรียบร้อย')
  //     router.push('/agent-register-success')
  //   },
  //   onError: (error) => {
  //     message.error(error.message)
  //   },
  // })

  const handleFinished = (values: any) => {
    //console.log('values', values)
    // createLeadNonAuthen({
    //   variables: {
    //     input: {
    //       firstName: values.firstName,
    //       lastName: values.lastName,
    //       phone: [{ value: values.phoneNumber }],
    //       leadType: Enum_Customer_Type.Agent,
    //       organizationName: values.factoryName,
    //       dataSource: 'Register',
    //       category: values.productType,
    //     },
    //   },
    // })
  }

  const children: React.ReactNode[] = []
  category?.map((item) => {
    // children.push(<Option key={item._id}>{item.name}</Option>)
  })

  return (
    <PageLayout
      title="เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิตร่วมกับเรา | แบ่งเบา"
      page="agent"
    >
      <Section>
        <Text page="agent" block color="primary" weight={500} size="headline">
          เข้าร่วมเป็นพาร์ทเนอร์ตัวแทน ร่วมกับเรา
        </Text>

        <Form scrollToFirstError autoComplete="off" onFinish={handleFinished}>
          <Row gutter={[16, 16]}>
            {/* <Col span={24}>
              <Form.Item name="factoryName" rules={[ruleRequired]}>
                <Input placeholder="ชื่อโรงงานของคุณ" />
              </Form.Item>
            </Col> */}

            <Col span={12}>
              <Form.Item name="firstName" rules={[ruleRequired]}>
                <Input placeholder="ชื่อ" />
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
                  visibleMobileOTP={visibleMobileOTP}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="productType" rules={[ruleRequired]}>
                <Select
                  showSearch
                  placeholder="ประเภทสินค้าที่ขาย"
                  filterOption={false}
                  onSearch={onSearch}
                  //notFoundContent={categoryList.loading ? <Spin size="small" /> : null}
                  // loading={categoryList.loading}
                >
                  {children}
                </Select>
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
              <Form.Item
                name="checkPrivate"
                rules={[{ validator: validation }]}
              >
                <Checkbox
                  checked={checkPrivate}
                  onChange={(e: any) => {
                    setCheckPrivate(e.target.checked)
                    form.validateFields(['checkPrivate'])
                  }}
                >
                  การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                  ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                  และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                  {
                    <Link href={'/privacy-policy-th'}>
                      ประกาศความเป็นส่วนตัว
                    </Link>
                  }{' '}
                  และข้าพเจ้าตกลงปฏิบัติตาม
                  {
                    <Link href={'/privacy-policy-th'}>
                      ข้อกำนดและเงื่อนไขใน
                    </Link>
                  }{' '}
                  การใช้บริการ ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
                </Checkbox>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="checkService"
                rules={[{ validator: validation }]}
              >
                <Checkbox
                  checked={checkService}
                  onChange={() => {
                    setCheckService(!checkService)
                    form.validateFields(['checkService'])
                  }}
                >
                  การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                  ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                  และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                  {
                    <Link href={'/privacy-policy-th'}>
                      ประกาศความเป็นส่วนตัว
                    </Link>
                  }{' '}
                  และข้าพเจ้าตกลงปฏิบัติตาม
                  {
                    <Link href={'/privacy-policy-th'}>
                      ข้อกำนดและเงื่อนไขใน
                    </Link>
                  }{' '}
                  การใช้บริการ ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
                </Checkbox>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="checkTerm" rules={[{ validator: validation }]}>
                <Checkbox
                  checked={checkTerm}
                  onChange={() => {
                    setCheckTerm(!checkTerm)
                    form.validateFields(['checkTerm'])
                  }}
                >
                  การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                  ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                  และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                  {
                    <Link href={'/privacy-policy-th'}>
                      ประกาศความเป็นส่วนตัว
                    </Link>
                  }{' '}
                  และข้าพเจ้าตกลงปฏิบัติตาม
                  {
                    <Link href={'/privacy-policy-th'}>
                      ข้อกำนดและเงื่อนไขใน
                    </Link>
                  }{' '}
                  การใช้บริการ ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
                </Checkbox>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Button
                disabled={
                  !checkPrivate || !checkService || !checkTerm || !otpVerify
                }
                block
                type="primary"
                htmlType="submit"
                //  loading={loading}
              >
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

      <MobileOTPInputModal
        phoneNumber={phoneNumber}
        visible={visibleMobileOTP}
        onClose={() => setVisibleMobileOTP(false)}
      />
    </PageLayout>
  )
}

export default AgentRegisterPage
