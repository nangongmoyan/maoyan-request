import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!
/** 演员相关的Api */
export const celebrityApi = {
  /**
 * 演员信息
 * @author nangongmoyan
 * @param celebrityId 
 * @param vo 
 * @returns 
 */
  information: async(celebrityId: string, vo: Celebrity.Information.Request): Promise<Celebrity.Information.Data> =>{
    return mapYanTryCatch<Celebrity.Information.Data>(apiRequest?.<Celebrity.Information.Request, Celebrity.Information.Data>({
      vo,
      url: pathMap.celebrityApi.information([celebrityId]),
      key: createRequestKey('celebrityApi', 'information'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
 * 演员照片
 * @author nangongmoyan
 * @param celebrityId 
 * @param vo 
 * @returns 
 */
  photos: async(celebrityId: string, vo: Celebrity.Photos.Request): Promise<Celebrity.Photos.Data> =>{
    return mapYanTryCatch<Celebrity.Photos.Data>(apiRequest?.<Celebrity.Photos.Request, Celebrity.Photos.Data>({
      vo,
      url: pathMap.celebrityApi.photos([celebrityId]),
      key: createRequestKey('celebrityApi', 'photos'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
 * 演员表演
 * @author nangongmoyan
 * @param celebrityId 
 * @param vo 
 * @returns 
 */
  performance: async(celebrityId: string, vo: Celebrity.Performance.Request): Promise<RequestBase.MaoYanResponse<Celebrity.Performance.PerformanceItem[]>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<Celebrity.Performance.PerformanceItem[]>>(apiRequest?.<Celebrity.Performance.Request, Celebrity.Performance.PerformanceItem[]>({
      vo,
      url: pathMap.celebrityApi.performance([celebrityId]),
      key: createRequestKey('celebrityApi', 'performance'),
    }).then(rlt => rlt ?? {}))
  },

  /**
 * 演员关系
 * @author nangongmoyan
 * @param celebrityId 
 * @param vo 
 * @returns 
 */
  relationship: async(celebrityId: string, vo: Celebrity.Relationship.Request): Promise<Celebrity.Relationship.Data> =>{
    return mapYanTryCatch<Celebrity.Relationship.Data>(apiRequest?.<Celebrity.Relationship.Request, Celebrity.Relationship.Data>({
      vo,
      url: pathMap.celebrityApi.relationship([celebrityId]),
      key: createRequestKey('celebrityApi', 'relationship'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
   * 演员电影
   * @author nangongmoyan
   * @param celebrityId 
   * @param vo 
   * @returns 
   */
  movies: async(celebrityId: string, vo: Celebrity.Movies.Request): Promise<Celebrity.Movies.Data> =>{
    return mapYanTryCatch<Celebrity.Movies.Data>(apiRequest?.<Celebrity.Movies.Request, Celebrity.Movies.Data>({
      vo,
      url: pathMap.celebrityApi.movies([celebrityId]),
      key: createRequestKey('celebrityApi', 'movies'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
   * 演员近期电影
   * @author nangongmoyan
   * @param celebrityId 
   * @param vo 
   * @returns 
   */
  recentMovies: async(celebrityId: string, vo: Celebrity.RecentMovies.Request): Promise<RequestBase.MaoYanResponse<Celebrity.RecentMovies.RecentMovieItem[]>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<Celebrity.RecentMovies.RecentMovieItem[]>>(apiRequest?.<Celebrity.RecentMovies.Request, Celebrity.RecentMovies.RecentMovieItem[]>({
      vo,
      url: pathMap.celebrityApi.recentMovies([celebrityId]),
      key: createRequestKey('celebrityApi', 'recentMovies'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 演员份量
   * @author nangongmoyan
   * @param celebrityId 
   * @param vo 
   * @returns 
   */
  quantity: async(celebrityId: string, vo: Celebrity.Quantity.Request): Promise<RequestBase.MaoYanResponse<Celebrity.Quantity.Data>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<Celebrity.Quantity.Data>>(apiRequest?.<Celebrity.Quantity.Request, Celebrity.Quantity.Data>({
      vo,
      url: pathMap.celebrityApi.quantity([celebrityId]),
      key: createRequestKey('celebrityApi', 'quantity'),
    }).then(rlt => rlt ?? {}))
  },
}
