import { AxiosResponse, CreateAxiosDefaults, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

declare global {
  /** 域名类型 */
  type Server = 'wx' | 'ad' | 'iwx' | 'api' | 'monitor' | 'vodMovie'

  interface MaoYanResponse<T>{
    data: T
  }
  /**  */
  interface MaoYanRequestConfig<T,R> extends RequestConfig<MaoYanResponse<R>>{
    vo?: T
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

  /** */
  interface CancelRequestSource {
    [index: string]: () => void
  }

  /** */
  type ConfigMap = {
    [key in Server]: CreateRequestConfig
  }

}

export {};