import { useQuery, useMutation, UseMutationResult } from 'react-query'
import {
  RequestOPTInput,
  ResponseRequestOTP,
  ResponseSubmitOTP,
  SubmitOTPInput,
} from 'services/interface'
import { requestOtp, submitOtp } from 'services/otpApi'

export const useRequestOtp = (): UseMutationResult<
  ResponseRequestOTP,
  Error,
  RequestOPTInput,
  unknown
> => {
  return useMutation<ResponseRequestOTP, Error, RequestOPTInput, unknown>(
    (input: RequestOPTInput): Promise<ResponseRequestOTP> => requestOtp(input)
  )
}

export const useSubmitOtp = (): UseMutationResult<
  ResponseSubmitOTP,
  Error,
  SubmitOTPInput,
  unknown
> => {
  return useMutation<ResponseSubmitOTP, Error, SubmitOTPInput, unknown>(
    (input: SubmitOTPInput): Promise<ResponseSubmitOTP> => submitOtp(input)
  )
}
