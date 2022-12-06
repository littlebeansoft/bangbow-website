export interface IError {
  message: string
  code: number
  status: string
}

export interface RequestOPTInput {
  mobile: string
  app_name: string
}

export interface ResponseRequestOTP {
  status: string
  ref_no: string
  token: string
  description?: string
}

export interface SubmitOTPInput {
  ref_code: string
  pin: string
  token: string
}

export interface ResponseSubmitOTP {
  status: string
}

export interface CategoryResponse extends Array<CategoryData> {}

type CategoryData = {
  id: string
  name: string
  update_date: string
}

export interface RegisterFactoryInput {
  first_name: string
  last_name: string
  email: string
  mobile: string
  factory_name: string
  product_category_id: string
  product_description: string
  address?: AddressInput | null
}

type AddressInput = {
  province_id: number
  district_id: number
  sub_district_id: number
  post_code: number
}

export interface RegisterFactoryResponse {
  status: string
}

export interface RegisterAgentInput {
  first_name: string
  last_name: string
  email: string
  mobile: string
  sponsor_id: string
  address?: AddressInput | null
}

export interface RegisterAgentResponse {
  status: string
}

export interface MasterProvinceResponse extends Array<MasterProvinceData> {}

type MasterProvinceData = {
  id: number
  name_th: string
  name_en: string
  geography_id: number
  update_date: string
}

export interface MasterDistrictResponse extends Array<MasterDistrictData> {}

type MasterDistrictData = {
  id: number
  name_th: string
  name_en: string
}

export interface MasterSubDistrictResponse
  extends Array<MasterSubDistrictData> {}

type MasterSubDistrictData = {
  id: number
  name_th: string
  name_en: string
  zip_code: number
}
