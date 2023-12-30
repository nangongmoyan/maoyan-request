/** api 环境 */
export type Env = 'empty' | 'release' 

/** */
export type ErrorProperty = 'invalidurl'

/** 域名类型 */
export type Server = 'i'| 'm'| 'wx' | 'ad' | 'iwx' | 'api' | 'verify' |'monitor' | 'passport' | 'vodMovie' | 'nangongmoyan'

/** */
export type ApiName = 'deployApi' | 'movieApi' | 'celebrityApi' | 'commentApi' | 'replyApi' | 'cheerfulApi' | 'attractionApi' | 'waterfallApi' | 'carouselApi' | 
  'videoApi' | 'cinemaApi'

/** */
export type ApiPath  = {
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


/** */
export type ServerConfig  = {
  [env in Env]: {
    [key in Server]: string
  }
}

/** */
export type ConfigMap = {
  [key in Server]: CreateRequestConfig
}

/** */
export type PathMap = {
  [api in ApiName]: {
    [path in ApiPath[api]]: (values?: string[]) => string | undefined
  }
}

/** */
export interface Paging {
  hasMore:   boolean; //是否还有下一页
  limit:     number;
  offset:    number;
  timestamp?: number;
  total:     number;
}

/** */
export interface MaoYanErrResponse1 {
  code: number
  message: string 
  request: string 
}

export interface MaoYanResponse<T>{
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

export interface MaoYanErrorProps {
  msg: string 
  code: number
}


export type ConstError = {
  [key in ErrorProperty] :MaoYanErrorProps
}