import { handleResponseError } from './../helpers/utils'
import { API } from './endpoint'
import { RegisterFactoryInput, RegisterFactoryResponse } from './interface.d'
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
