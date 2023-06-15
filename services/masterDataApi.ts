import { handleResponseError } from './../helpers/utils'
import { API } from './endpoint'
import {
  MasterProvinceResponse,
  MasterDistrictResponse,
  MasterSubDistrictResponse,
  GetMasterResponseZipCode,
} from './interface.d'
import httpClient from '../axios/interceptors'
import { AxiosResponse } from 'axios'

export const getMasterProvice = async (): Promise<MasterProvinceResponse> => {
  const data: AxiosResponse<MasterProvinceResponse> = await httpClient
    .get(API.masterProvice)
    .catch((error) => handleResponseError(error))
  return data.data
}

export const getMasterDistrict = async (
  provinceId: number
): Promise<MasterDistrictResponse> => {
  const data: AxiosResponse<MasterDistrictResponse> = await httpClient
    .get(API.masterDistrict + provinceId)
    .catch((error) => handleResponseError(error))
  return data.data
}

export const getMasterSubDistrict = async (
  districtId: number
): Promise<MasterSubDistrictResponse> => {
  const data: AxiosResponse<MasterSubDistrictResponse> = await httpClient
    .get(API.masterSubDistrict + districtId)
    .catch((error) => handleResponseError(error))
  return data.data
}

export const getMasterZipcode = async (
  zipcode: string
): Promise<GetMasterResponseZipCode> => {
  const data: AxiosResponse<GetMasterResponseZipCode> = await httpClient
    .get(API.masterZipcode + zipcode)
    .catch((error) => handleResponseError(error))
  return data.data
}
