import { AxiosResponse, CreateAxiosDefaults, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

declare global {

  /** api 环境 */
  type Env = 'empty' | 'release'

  /** */
  type ErrorProperty = 'invalidurl'

  /** 域名类型 */
  type Server = 'i'| 'm'| 'wx' | 'ad' | 'iwx' | 'api' | 'verify' |'monitor' | 'passport' | 'vodMovie' | 'nangongmoyan'

  /** */
  type ApiName = 'deployApi' | 'movieApi' | 'celebrityApi' | 'commentApi' | 'replyApi' | 'cheerfulApi' | 'attractionApi' | 'waterfallApi' | 'carouselApi' | 
    'videoApi' | 'cinemaApi'

  type ApiPath  = {
    replyApi: 'replies'
    carouselApi: 'detail'
    attractionApi: 'sights'
    videoApi: 'onlineMovies'
    waterfallApi : 'feedChannel'
    deployApi: 'homeTab' | 'city'
    cheerfulApi: 'secretRoom' | 'wonderShow' | 'scriptKill'
    cinemaApi: 'filterCinemas' | 'moreCinemas' | 'detail' | 'show'
    commentApi: 'hotTag' | 'tagAndTopic' | 'comments' | 'hotTopic' | 'information'
    celebrityApi : 'information' | 'photos' | 'performance' | 'relationship' |  'movies' | 'recentMovies' | 'quantity'
    movieApi : 'hot' | 'coming' | 'wishComing' | 'detail' | 'playplatform' | 'photos' | 'reputation' |   'recommendTag' | 'distribution' | 'celebrities' | 
      'videos' | 'hotVideos'  | 'activity' | 'realtime' | 'wishRecords'
    // passport: 'loginInSmsStep1'
  }

  interface Paging {
    hasMore:   boolean;
    limit:     number;
    offset:    number;
    timestamp?: number;
    total:     number;
  }


  interface Location {
    lng: number // 经度
    lat: number // 纬度
  }
  /** 请求相关的 */
  namespace RequestBase {
    interface MaoYanResponse<T>{
      data:     T
      cinemas?: T
      paging?:  Paging;
      success?: boolean;
      error?:   MaoYanErrResponse1
      errMsg?: string | null,
      message?: string | null,
      code?: number,
      ts?: Date
      attrMaps?: {
        serverTime: Date
      };
    }

    interface MaoYanErrResponse1 {
      code: number
      message: string 
      request: string 
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
      code: number
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
    [api in ApiName]: {
      [path in ApiPath[api]]: (values?: string[]) => string | undefined
    }
  }

}

export {};