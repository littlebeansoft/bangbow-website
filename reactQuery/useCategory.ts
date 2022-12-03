import {
  useQuery,
  useMutation,
  UseMutationResult,
  UseQueryResult,
} from 'react-query'
import { CategoryResponse } from 'services/interface'
import { getCategory } from 'services/categoryApi'

export const useGetCategory = (): UseQueryResult<CategoryResponse, Error> => {
  return useQuery<CategoryResponse, Error>('category', () => getCategory(), {
    staleTime: 1000 * 60 * 60 * 24,
  })
}
