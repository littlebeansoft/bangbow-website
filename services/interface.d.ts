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
  ref_value: string
}
