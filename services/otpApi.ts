import { handleResponseError } from './../helpers/utils'
import { API } from './endpoint'
import {
  RequestOPTInput,
  SubmitOTPInput,
  ResponseRequestOTP,
  ResponseSubmitOTP,
} from './interface.d'
import httpClient from '../axios/interceptors'
import { AxiosResponse } from 'axios'

export const requestOtp = async (
  input: RequestOPTInput
): Promise<ResponseRequestOTP> => {
  const data: AxiosResponse<ResponseRequestOTP> = await httpClient
    .post(API.requestOtp, input)
    .catch((error) => handleResponseError(error))
  return data.data
}

export const submitOtp = async (
  input: SubmitOTPInput
): Promise<ResponseSubmitOTP> => {
  const data: AxiosResponse<ResponseSubmitOTP> = await httpClient
    .post(API.submitOtp, input)
    .catch((error) => handleResponseError(error))
  return data.data
}
