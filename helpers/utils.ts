import { GetCategoryResp } from 'graphql/useGetCategory/interface'

export const getPageTypeTheme = (path: string) => {
  if (path.includes('agent')) {
    return 'agent'
  }

  return 'factory'
}

export const getOptions = (payload: GetCategoryResp[] | null) => {
  if (!payload) {
    return
  }
  let options = payload.map((item: GetCategoryResp) => {
    return {
      key: item._id,
      value: item.name,
      categoryKey: item.categoryKey,
    }
  })
  return options
}
