import { useQuery, useMutation, UseMutationResult } from 'react-query'
import {
  RegisterFactoryResponse,
  RegisterFactoryInput,
} from 'services/interface'
import { registerFactory } from 'services/registerApi'

export const useRegisterFactory = (): UseMutationResult<
  RegisterFactoryResponse,
  Error,
  RegisterFactoryInput,
  unknown
> => {
  return useMutation<
    RegisterFactoryResponse,
    Error,
    RegisterFactoryInput,
    unknown
  >(
    (input: RegisterFactoryInput): Promise<RegisterFactoryResponse> =>
      registerFactory(input)
  )
}
