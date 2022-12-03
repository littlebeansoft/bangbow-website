import { useQuery, useMutation, UseMutationResult } from 'react-query'
import { RequestOPTInput, ResponseRequestOTP } from 'services/interface'
import { requestOtp } from 'services/otpApi'

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
