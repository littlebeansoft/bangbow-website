import {
  APIPayloadResponseWithPagination,
  Pagination,
} from 'graphql/graphQL-service-hook'

export type SelfProductCategory = {
  _id: string
  key: string
  parent: string
  name: string
  hasChildren: boolean
}

interface ProductCategoryAPIPayload {
  _id: string
  name: string
  key: string
  parent: string
  tree: string[]
  treeFull: SelfProductCategory[]
  attributes: string[]
  hasChildren: boolean
}

type TOGGLE_STATUS = 'ENABLED' | 'DISABLED'

type GetCategoryQuery = {
  categoryId?: string
  categoryKey?: string
  path?: string
  pathRegex?: string
  name?: string
  descriptions?: string
  status?: string
}

type ParentCategoryRes = {
  _id: string
  categoryKey: string
  path: string
  name: string
  descriptions: string
  status: TOGGLE_STATUS
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

type GetCategoryResp = {
  _id: string
  categoryKey: string
  path: string
  name: string
  descriptions: string
  status: TOGGLE_STATUS
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
  parentCategory: ParentCategoryRes
}

type SORT_ORDER = 'ASC' | 'DESC'

type GetProductCategoryLevelSortInput = {
  createdAt: SORT_ORDER
}

export interface GetCategoryInPut {
  query?: GetCategoryQuery
  filter?: GetProductCategoryLevel
  sort?: JSON
  pagination?: Pagination
}

export interface CategoryDataVars {
  input?: GetCategoryInPut
}

export interface CategoryData {
  getCategory: APIPayloadResponseWithPagination<GetCategoryResp[]>
}
