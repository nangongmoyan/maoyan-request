import { AxiosResponse, CreateAxiosDefaults, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

declare global {

  interface Crypto {
    randomUUID: () => string;
  }

  /** api 环境 */
  type Env = 'empty' | 'release'

  /** */
  type ErrorProperty = 'invalidurl'

  /** 域名类型 */
  type Server = 'i'| 'm'| 'wx' | 'ad' | 'iwx' | 'api' | 'verify' |'monitor' | 'passport' | 'vodMovie' 

  type ServerPath  = {
    api : 'hotFilm' | 'comingSoonFilm' | 'toBeScreenedFilm' | 'filmDetail' | 'playPlatform' | 'filmPhotos' | 'reputation' | 'recommendTag' | 'distribution' | 
    'celebrities' | 'hotTopic' | 'celebrityInfo' | 'celebrityPhotos'
    passport: 'loginInSmsStep1'
  }

  /** */
  type ApiName = 'filmApi'  | 'authApi'

  /** 请求相关的 */
  namespace RequestBase {
    interface MaoYanResponse<T>{
      data: T
    }
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


    /** */
    interface CancelRequestSource {
      [index: string]: () => void
    }

    interface MaoYanErrorProps {
      msg: string 
      code: string
    }


    type ConstError = {
      [key in ErrorProperty] :MaoYanErrorProps
    }
  }

  /** */
  type ServerConfig  = {
    [env in Env]: {
      [key in Server]: string
    }
  }

  /** */
  type ConfigMap = {
    [key in Server]: CreateRequestConfig
  }

  /** */
  type PathMap = {
    [server in Server]: {
      [path in ServerPath[server]]: (values?: string[]) => string | undefined
    }
  }



}

export {};