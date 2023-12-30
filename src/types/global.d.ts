import { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";

declare global {
  /**  */
  interface MaoYanRequestConfig<T,R> extends RequestConfig<MaoYanResponse<R>>{
    key: string
    suffix?: string // 请求后缀
    vo?: T & {
      ci?: string
      uuid?: string
      cityId?: string
      channelId?: string
    }
    needProperty?: {
      uuid?: boolean
      channelId?: boolean
      needCityId?: boolean
    }
    cityProperty?: 'ci' | 'cityId'
  }

      /** */
  interface RequestInterceptors<T> {
    //请求拦截
    requestInterceptors?:(config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestInterceptorsCatch?:(error: any) => any
    // 响应拦截
    responseInterceptors?: (config: T) => T
    responseInterceptorsCatch?: (error: any) => any
  }

  /** */
  interface CreateRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {
    interceptors?: RequestInterceptors<T>
  }

  /** */
  interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: RequestInterceptors<T>
  }

  interface CancelRequestSource {
    [index: string]: () => void
  }
}

export { };
