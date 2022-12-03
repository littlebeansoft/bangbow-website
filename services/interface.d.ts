export interface RequestOPTInput {
  mobile: string
}

export interface ResponseRequestOTP {
  status: string
  ref_no: string
  token: string
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
