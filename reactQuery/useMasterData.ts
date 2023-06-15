import {
  useQuery,
  useMutation,
  UseMutationResult,
  UseQueryResult,
} from 'react-query'
import {
  MasterProvinceResponse,
  MasterDistrictResponse,
  MasterSubDistrictResponse,
  GetMasterResponseZipCode,
} from 'services/interface'
import {
  getMasterProvice,
  getMasterDistrict,
  getMasterSubDistrict,
  getMasterZipcode,
} from 'services/masterDataApi'

export const useGetMasterProvice = (): UseQueryResult<
  MasterProvinceResponse,
  Error
> => {
  return useQuery<MasterProvinceResponse, Error>(
    'provice',
    () => getMasterProvice(),
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  )
}

export const useGetMasterDistrict = (
  provinceId: number
): UseQueryResult<MasterDistrictResponse, Error> => {
  return useQuery<MasterDistrictResponse, Error>(
    `provice${provinceId}`,
    () => getMasterDistrict(provinceId),
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  )
}

export const useGetMasterSubDistrict = (
  districtId: number
): UseQueryResult<MasterSubDistrictResponse, Error> => {
  return useQuery<MasterSubDistrictResponse, Error>(
    `district${districtId}`,
    () => getMasterSubDistrict(districtId),
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  )
}

export const useGetZipcode = (
  zipCode: string
): UseQueryResult<GetMasterResponseZipCode, Error> => {
  return useQuery<GetMasterResponseZipCode, Error>(
    `zipCode_${zipCode}`,
    () => getMasterZipcode(zipCode),
    {
      staleTime: 1000 * 60 * 60 * 24,
    }
  )
}
