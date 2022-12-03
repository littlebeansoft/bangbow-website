import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'
import { backendUrl } from '../constants/config'

type IConfig = AxiosRequestConfig & {
  headers: RawAxiosRequestHeaders & {
    Authorization?: string
  }
}

const requestConfig: IConfig = {
  baseURL: backendUrl,
  // timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
}

const httpClient = axios.create(requestConfig)

httpClient.interceptors.request.use(
  (config: any) => {
    //const token = store.getState().auth.accessTokenKey

    // config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response)
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }

    if (error.response.status === 401) {
      //store.dispatch(sigOut)
    } else {
      return new Promise((resolve, reject) => {
        reject(error)
      })
    }
  }
)

export default httpClient
