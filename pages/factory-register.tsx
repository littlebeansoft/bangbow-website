import type { NextPage } from 'next'
import type { Rule } from 'antd/lib/form'
import ReCAPTCHA from 'react-google-recaptcha'

import { useEffect, useState } from 'react'
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
import MobileOTPInputModal from 'components/MobileOTPInputModal'
import PhoneNumberInput from 'components/PhoneNumberInput'

import PageLayout from 'layouts/PageLayout'

import color from 'constants/color'
import { RuleObject } from 'rc-field-form/lib/interface'
import { useAppSelector } from 'store'

import Link from 'next/link'
import { CategoryResponse } from 'services/interface'
import { useGetCategory } from '../reactQuery/useCategory'
import { useRegisterFactory } from 'reactQuery/useRegister'
import UploadForm from 'components/Upload'
import DrawerPrivacyPolicy from 'components/DrawerPrivacyPolicy'
import DrawerTerms from 'components/DrawerTerms'

const { Option } = Select

const FactoryRegisterPage: NextPage = () => {
  const router = useRouter()
  const [form] = Form.useForm()

  const otpVerify = useAppSelector((state) => state.otp.otpVerify)

  const [phoneNumber, setPhoneNumber] = useState<string>()
  //const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const [checkPrivate, setCheckPrivate] = useState(false)
  const [checkService, setCheckService] = useState(false)
  const [checkTerm, setCheckTerm] = useState(false)
  const [checkRecaptcha, setCheckRecaptcha] = useState(false)
  const [category, setCategory] = useState<CategoryResponse>([])
  const [showModalTerms, setShowModalTerms] = useState(false)

  const [visibleMobileOTP, setVisibleMobileOTP] = useState(false)
  //const timer = useRef<ReturnType<typeof setTimeout>>()
  const secret_key =
    process.env.NEXT_PUBLIC_RECAPTCHA_SECRET ||
    '6LdOgaIjAAAAALn798n2enF6WJNVjz8jnnnczR5M'

  const ruleRequired: Rule = {
    required: true,
    message: 'โปรดระบุ',
  }
  const validationPrivate = (
    rule: RuleObject,
    value: any,
    callback: (error?: string) => void
  ) => {
    if (checkPrivate) {
      return callback()
    }
    return callback('กรุณากดยอมรับ ข้อตกลงและเงื่อนไข')
  }

  const validationService = (
    rule: RuleObject,
    value: any,
    callback: (error?: string) => void
  ) => {
    if (checkService) {
      return callback()
    }
    return callback('กรุณากดยอมรับ ข้อตกลงและเงื่อนไข')
  }

  const validationTerm = (
    rule: RuleObject,
    value: any,
    callback: (error?: string) => void
  ) => {
    if (checkTerm) {
      return callback()
    }
    return callback('กรุณากดยอมรับ ข้อตกลงและเงื่อนไข')
  }

  const { data: categoryData, isLoading: categoryLoading } = useGetCategory()

  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData)
    }
  }, [categoryData])

  const { mutate: factoryRegister, isLoading } = useRegisterFactory()

  const handleFinished = (values: any) => {
    //console.log('values', values)
    factoryRegister(
      {
        factory_name: values.factoryName,
        first_name: values.firstName,
        last_name: values.lastName,
        mobile: values.phoneNumber,
        email: '',
        product_category_id: values.productType,
        product_description: values.productDescription,
        address: {
          province_id: 1, // ถ้่าไม่ใส่จะไม่สามารถสมัครได้
          district_id: 1005, // ถ้่าไม่ใส่จะไม่สามารถสมัครได้
          sub_district_id: 100502, // ถ้่าไม่ใส่จะไม่สามารถสมัครได้
          post_code: 10220, // ถ้่าไม่ใส่จะไม่สามารถสมัครได้
        },
      },
      {
        onSuccess: () => {
          // backend return string ok
          message.success('สมัครสมาชิกเรียบร้อย')
          router.push('/factory-register-success')
        },
        onError: (error) => {
          message.error(error.message)
        },
      }
    )
  }

  const children: React.ReactNode[] = []
  category?.map((item) => {
    children.push(<Option key={item.id}>{item.name}</Option>)
  })

  const onClose = () => {
    setShowModalTerms(false)
  }

  const handleCheckTerm = () => {
    setCheckPrivate(true)
    form.validateFields(['checkPrivate'])
  }

  return (
    <PageLayout title="เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิตร่วมกับเรา | แบ่งเบา">
      <Section>
        <Text block color="primary" weight={500} size="headline">
          เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิต <br />
          ร่วมกับเรา
        </Text>

        <Form scrollToFirstError autoComplete="off" onFinish={handleFinished}>
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
                  visibleMobileOTP={visibleMobileOTP}
                  appName="factory"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="productType" rules={[ruleRequired]}>
                <Select
                  showSearch
                  placeholder="ประเภทสินค้าที่ขาย"
                  optionFilterProp="children"
                  notFoundContent={
                    categoryLoading ? <Spin size="small" /> : null
                  }
                  loading={categoryLoading}
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
              <div
                style={{
                  borderStyle: 'dashed',
                  borderColor: '#C4C4C4',
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Form.Item name="fileUpload">
                  <UploadForm />
                </Form.Item>
              </div>
            </Col>

            <Col span={24}>
              <DrawerTerms
                show={showModalTerms}
                onClose={onClose}
                handleCheckTerm={handleCheckTerm}
              />
              <Form.Item
                name="checkPrivate"
                rules={[{ validator: validationPrivate }]}
              >
                <Checkbox
                  checked={checkPrivate}
                  onChange={() => {
                    setCheckPrivate(!checkPrivate)
                    form.validateFields(['checkPrivate'])
                  }}
                  onClick={() => {
                    setShowModalTerms(true)
                  }}
                >
                  การคลิกปุ่มนี้เพื่อใช้บริการ หมายความว่า
                  ข้าพเจ้าตกลงให้แบ่งเบามีสิทธิ์ รวบรวม ใช้
                  และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม
                  <span style={{ color: '#2699FB' }}>
                    {' '}
                    นโยบายความเป็นส่วนตัวของแบ่งเบา{' '}
                  </span>
                  และข้าพเจ้าตกลงปฏิบัติตาม
                  <span style={{ color: '#2699FB' }}>
                    {' '}
                    ข้อตกลงและเงื่อนไขการใช้บริการของแบ่งเบา{' '}
                  </span>
                  ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
                </Checkbox>
              </Form.Item>
            </Col>

            {/* <Col span={24}>
              <Form.Item
                name="checkService"
                rules={[{ validator: validationService }]}
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
                  และเปิดเผยข้อมูลที่ข้าพเจ้าเตรียมให้โดยเป็นไปตาม{' '}
                  {<DrawerPrivacyPolicy />} และข้าพเจ้าตกลงปฏิบัติตาม
                  {<DrawerTerms />}
                  ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
                </Checkbox>
              </Form.Item>
            </Col> */}

            {/* <Col span={24}>
              <Form.Item
                name="checkTerm"
                rules={[{ validator: validationTerm }]}
              >
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
                  {<DrawerPrivacyPolicy />}
                  และข้าพเจ้าตกลงปฏิบัติตาม
                  {<DrawerTerms />}
                  ซึ่งข้าพเจ้าได้อ่านและทำความเข้าใจเรียบร้อยแล้ว
                </Checkbox>
              </Form.Item>
            </Col> */}

            <Col span={24}>
              <Row justify="center">
                <Col>
                  <ReCAPTCHA
                    size="normal"
                    sitekey={secret_key}
                    onChange={() => {
                      setCheckRecaptcha(true)
                    }}
                  />
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <Button
                disabled={
                  !checkPrivate ||
                  //!checkService ||
                  //  !checkTerm ||
                  !otpVerify ||
                  !checkRecaptcha
                }
                block
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
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
                  <Link href={'/privacy-policy-th'}>
                    <a target="_blank">เงื่อนไขและข้อกำหนดของแบ่งเบา</a>
                  </Link>
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
        appName="factory"
      />
    </PageLayout>
  )
}

export default FactoryRegisterPage
