import { GetCategoryResp } from 'graphql/useGetCategory/interface'

export const getPageTypeTheme = (path: string) => {
  if (path.includes('agent')) {
    return 'agent'
  }

  return 'factory'
}

export const getOptions = (payload: GetCategoryResp[]) => {
  if (!payload) {
    return undefined
  }
  let options = payload.map((item: GetCategoryResp) => {
    return {
      key: item._id,
      value: item.name || '',
    }
  })
  return options
}

export const handleResponseError = (error: {
  response: { data: { message: any } }
}) => {
  // console.log('error', error?.response?.data?.message)
  if (error?.response?.data) {
    throw error.response.data
  }
  throw error
}
