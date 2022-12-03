import { handleResponseError } from './../helpers/utils'
import { API } from './endpoint'
import { CategoryResponse } from './interface.d'
import httpClient from '../axios/interceptors'
import { AxiosResponse } from 'axios'

export const getCategory = async (): Promise<CategoryResponse> => {
  const data: AxiosResponse<CategoryResponse> = await httpClient
    .get(API.getCategory)
    .catch((error) => handleResponseError(error))
  return data.data
}
