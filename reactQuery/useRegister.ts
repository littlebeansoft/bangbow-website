import { useQuery, useMutation, UseMutationResult } from 'react-query'
import {
  RegisterFactoryResponse,
  RegisterFactoryInput,
  RegisterAgentInput,
  RegisterAgentResponse,
} from 'services/interface'
import { registerFactory, registerAgent } from 'services/registerApi'

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

export const useRegisterAgent = (): UseMutationResult<
  RegisterAgentResponse,
  Error,
  RegisterAgentInput,
  unknown
> => {
  return useMutation<RegisterAgentResponse, Error, RegisterAgentInput, unknown>(
    (input: RegisterAgentInput): Promise<RegisterAgentResponse> =>
      registerAgent(input)
  )
}
