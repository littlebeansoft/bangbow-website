import type { NextPage } from 'next'
import type { Rule } from 'antd/lib/form'
import ReCAPTCHA from 'react-google-recaptcha'

import { useEffect, useRef, useState } from 'react'
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

import color from 'constants/color'
import { RuleObject } from 'rc-field-form/lib/interface'
import { useAppSelector } from 'store'
import Link from 'next/link'
import {
  MasterProvinceData,
  MasterDistrictData,
  MasterSubDistrictData,
  MasterZipcodeData,
} from 'services/interface'
import { useRegisterAgent } from 'reactQuery/useRegister'
import {
  useGetMasterDistrict,
  useGetMasterProvice,
  useGetMasterSubDistrict,
  useGetZipcode,
} from 'reactQuery/useMasterData'
import DrawerPrivacyPolicy from 'components/DrawerPrivacyPolicy'
import DrawerTerms from 'components/DrawerTerms'

const { Option } = Select

const AgentRegisterPage: NextPage = () => {
  const router = useRouter()
  const [form] = Form.useForm()

  const otpVerify = useAppSelector((state) => state.otp.otpVerify)

  const [phoneNumber, setPhoneNumber] = useState<string>()
  const [visibleMobileOTP, setVisibleMobileOTP] = useState(false)
  const [checkPrivate, setCheckPrivate] = useState(false)
  const [checkService, setCheckService] = useState(false)
  const [checkTerm, setCheckTerm] = useState(false)
  const [province, setProvince] = useState<MasterProvinceData[]>([])
  const [district, setDistrict] = useState<MasterDistrictData[]>([])
  const [subDistrict, setSubDistrict] = useState<MasterSubDistrictData[]>([])
  const [proviceId, setProviceId] = useState<number>(0)
  const [districtId, setDistrictId] = useState<number>(0)
  const [zipCode, setZipCode] = useState<string>('10520')
  const sponsorId = useRef<string>('')
  const [checkRecaptcha, setCheckRecaptcha] = useState(false)
  const [showModalTerms, setShowModalTerms] = useState(false)
  const [otpErrorMessage, setOtpErrorMessage] = useState<string | null>()
  const [zipcodeData, setZipcodeData] = useState<MasterZipcodeData[]>([])
  const [realZipcode, setRealZipcode] = useState<number>()

  const secret_key =
    process.env.NEXT_PUBLIC_RECAPTCHA_SECRET ||
    '6LdOgaIjAAAAALn798n2enF6WJNVjz8jnnnczR5M'

  if (router.query.sponsor) {
    const sponsor = atob(router.query.sponsor as string)
    sponsorId.current = sponsor
  }

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

  const { data: masterProviceData, isLoading: proviceLoading } =
    useGetMasterProvice()

  useEffect(() => {
    if (masterProviceData) {
      setProvince(masterProviceData)
    }
  }, [masterProviceData])

  const childrenProvince: React.ReactNode[] = []
  province?.map((item) => {
    childrenProvince.push(
      <Option key={item.id} value={item.id}>
        {item.name_th}
      </Option>
    )
  })

  const { data: masterDistrictData, isLoading: districtLoading } =
    useGetMasterDistrict(proviceId)

  useEffect(() => {
    if (masterDistrictData) {
      setDistrict(masterDistrictData)
    }
  }, [masterDistrictData])

  const childrenDistrict: React.ReactNode[] = []
  district?.map((item) => {
    childrenDistrict.push(
      <Option key={item.id} value={item.id}>
        {item.name_th}
      </Option>
    )
  })

  const { data: masterSubDistrictData, isLoading: subDistrictLoading } =
    useGetMasterSubDistrict(districtId)

  useEffect(() => {
    if (masterSubDistrictData) {
      setSubDistrict(masterSubDistrictData)
    }
  }, [masterSubDistrictData])

  const childrenSubDistrict: React.ReactNode[] = []
  subDistrict?.map((item) => {
    childrenSubDistrict.push(
      <Option key={item.id} value={item.id}>
        {item.name_th}
      </Option>
    )
  })

  const { mutate: registerAgent, isLoading } = useRegisterAgent()


  const onFinish = async (values: any) => {
    registerAgent(
      {
        first_name: values.firstName,
        last_name: values.lastName,
        mobile: values.phoneNumber,
        email: '',
        sponsor_id: sponsorId.current || '',
        address: {
          province_id: values.province_id,
          district_id: values.district_id,
          sub_district_id: values.sub_district_id,
          post_code: realZipcode || 0,
        },
        advisor_code: values.advisor_code
      },
      {
        onSuccess: response => {
          if(response.status === "failed"){
              message.error(response.error_message)
          }else{
            message.success('สมัครสมาชิกเรียบร้อย')
            router.push('/agent-register-success')
          }
        },
        onError: error  => {
         console.log("error mutation-->", error)
          message.error(error.message)
        },
      }
    )

  }
  // const   handleFinished = async (values: any) => {
   
  // }

  const onClose = () => {
    setShowModalTerms(false)
  }

  const handleCheckTerm = () => {
    setCheckPrivate(true)
    form.validateFields(['checkPrivate'])
  }

  const { data: masterZipcodeData, isLoading: zipcodeLoading } =
    useGetZipcode(zipCode)

  useEffect(() => {
    if (masterZipcodeData) {
      setZipcodeData(masterZipcodeData)
    }
  }, [masterZipcodeData])

  const childrenZipcode: React.ReactNode[] = []
  zipcodeData?.map((item) => {
    //console.log(item);
    childrenZipcode.push(
      <Option key={item.sub_district_id} value={item.sub_district_id}>
        {item.zip_code +
          ' ' +
          item.sub_district_name_th +
          ' ' +
          item.district_name_th +
          ' ' +
          item.province_name_th}
      </Option>
    )
  })

  return (
    <PageLayout
      title="เข้าร่วมเป็นพาร์ทเนอร์ผู้ผลิตร่วมกับเรา | แบ่งเบา"
      page="agent"
    >
      <Section>
        <Text page="agent" block color="primary" weight={500} size="headline">
          เข้าร่วมเป็นพาร์ทเนอร์ตัวแทน <br />
          ร่วมกับเรา
        </Text>

        <Form
          scrollToFirstError
          autoComplete="off"
          onFinish={onFinish}
          form={form}
        >
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
              {otpErrorMessage && (
                <Text size="small" style={{ color: 'red' }}>
                  {otpErrorMessage}
                </Text>
              )}
              <Form.Item name="phoneNumber" rules={[ruleRequired]}>
                <PhoneNumberInput
                  onPhoneNumberChange={setPhoneNumber}
                  onVisibleMobileOTP={() => setVisibleMobileOTP(true)}
                  visibleMobileOTP={visibleMobileOTP}
                  appName="agent"
                  setOtpErrorMessage={setOtpErrorMessage}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                // label="รหัสไปรษณีย์"
                name="zip_code"
                rules={[ruleRequired]}
              >
                <Select
                  showSearch
                  placeholder="รหัสไปรษณีย์"
                  optionFilterProp="children"
                  // defaultValue={data?.data.address[0].sub_district_id}
                  onSearch={(value) => {
                    if (value.length == 5) {
                      setZipCode(value)
                      // form.setFieldsValue({ zipCode: value })
                    }
                  }}
                  onChange={(value) => {
                    console.log('onChange' + value)

                    // find province_id with sub_district_id
                    zipcodeData.find((item) => {
                      if (item.sub_district_id == value) {
                        setProviceId(item.province_id)
                        setDistrictId(item.district_id)
                        setRealZipcode(item.zip_code)
                        form.setFieldsValue({ province_id: item.province_id })
                        form.setFieldsValue({ district_id: item.district_id })
                        form.setFieldsValue({
                          sub_district_id: item.sub_district_id,
                        })
                      } else {
                      }
                    })
                  }}
                  notFoundContent={
                    subDistrictLoading ? <Spin size="small" /> : null
                  }
                  loading={subDistrictLoading}
                >
                  {childrenZipcode}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                // label="ตำบล"
                name="sub_district_id"
                rules={[ruleRequired]}
              >
                <Select
                  showSearch
                  placeholder="ตำบล"
                  optionFilterProp="children"
                  disabled={true}
                  onChange={(value) => {
                    // subDistrict.map((item) => {
                    //   if (item.id == value) {
                    //     setZipCode(item.zip_code)
                    //     form.setFieldsValue({ zipCode: item.zip_code })
                    //   }
                    // })
                  }}
                  notFoundContent={
                    subDistrictLoading ? <Spin size="small" /> : null
                  }
                  loading={subDistrictLoading}
                >
                  {childrenSubDistrict}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                labelAlign="left"
                //label="อำเภอ"
                name="district_id"
                rules={[ruleRequired]}
              >
                <Select
                  showSearch
                  placeholder="อำเภอ"
                  optionFilterProp="children"
                  disabled={true}
                  onChange={(value) => {
                    // setDistrictId(value)
                    // form.setFieldsValue({ sub_district_id: undefined })
                    // form.setFieldsValue({ zipCode: undefined })
                  }}
                  notFoundContent={
                    districtLoading ? <Spin size="small" /> : null
                  }
                  loading={districtLoading}
                >
                  {childrenDistrict}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                // label="จังหวัด"
                name="province_id"
                rules={[ruleRequired]}
              >
                <Select
                  showSearch
                  placeholder="จังหวัด"
                  optionFilterProp="children"
                  disabled={true}
                  onChange={(value) => {
                    setProviceId(value)
                    // form.setFieldsValue({ district_id: undefined })
                    // form.setFieldsValue({ sub_district_id: undefined })
                    // form.setFieldsValue({ zipCode: undefined })
                  }}
                  notFoundContent={
                    proviceLoading ? <Spin size="small" /> : null
                  }
                  loading={proviceLoading}
                >
                  {childrenProvince}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}></Col>

            <Col span={12}>
              <Form.Item name="advisor_code" >
                <Input placeholder="รหัสผู้แนะนำ"/>
              </Form.Item>
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
                  //  !checkService ||
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
              <Text page="agent" size="small">
                เมื่อคลิกลงทะเบียน ข้าพเจ้ายอมรับ
                <span
                  style={{
                    color: color.primary.agent,
                    margin: '0 4px',
                  }}
                >
                  <Link href={'/agent-privacy-policy-th'}>
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
        appName="agent"
      />
    </PageLayout>
  )
}

export default AgentRegisterPage
