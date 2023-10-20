import { AxiosResponse, CreateAxiosDefaults, AxiosRequestConfig } from "axios";

declare global {
  /** 域名类型 */
  type Server = 'wx' | 'ad' | 'iwx' | 'api' | 'monitor' | 'vodMovie'

  /** */
  interface CreateRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {

  }

  /** */
  type ConfigMap = {
    [key in Server]: CreateRequestConfig
  }

}

export {};