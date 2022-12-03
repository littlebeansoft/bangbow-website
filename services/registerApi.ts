import { handleResponseError } from './../helpers/utils'
import { API } from './endpoint'
import {
  RegisterFactoryInput,
  RegisterFactoryResponse,
  RegisterAgentInput,
  RegisterAgentResponse,
} from './interface.d'
import httpClient from '../axios/interceptors'
import { AxiosResponse } from 'axios'

export const registerFactory = async (
  input: RegisterFactoryInput
): Promise<RegisterFactoryResponse> => {
  const data: AxiosResponse<RegisterFactoryResponse> = await httpClient
    .post(API.registerFactory, input)
    .catch((error) => handleResponseError(error))
  return data.data
}

export const registerAgent = async (
  input: RegisterAgentInput
): Promise<RegisterAgentResponse> => {
  const data: AxiosResponse<RegisterAgentResponse> = await httpClient
    .post(API.registerAgent, input)
    .catch((error) => handleResponseError(error))
  return data.data
}
