import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { InformationData, InformationRequest, MoviesData, MoviesRequest, PerformanceItem, PerformanceRequest, PhotosData, PhotosRequest, QuantityData, QuantityRequest, RecentMovieItem, RecentMoviesRequest, RelationshipData, RelationshipRequest } from "./types"

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
  information: async(celebrityId: string, vo: InformationRequest): Promise<InformationData> =>{
    return mapYanTryCatch<InformationData>(apiRequest?.<InformationRequest, InformationData>({
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
  photos: async(celebrityId: string, vo: PhotosRequest): Promise<PhotosData> =>{
    return mapYanTryCatch<PhotosData>(apiRequest?.<PhotosRequest, PhotosData>({
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
  performance: async(celebrityId: string, vo: PerformanceRequest): Promise<MaoYanResponse<PerformanceItem[]>> =>{
    return mapYanTryCatch<MaoYanResponse<PerformanceItem[]>>(apiRequest?.<PerformanceRequest, PerformanceItem[]>({
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
  relationship: async(celebrityId: string, vo: RelationshipRequest): Promise<RelationshipData> =>{
    return mapYanTryCatch<RelationshipData>(apiRequest?.<RelationshipRequest, RelationshipData>({
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
  movies: async(celebrityId: string, vo: MoviesRequest): Promise<MoviesData> =>{
    return mapYanTryCatch<MoviesData>(apiRequest?.<MoviesRequest, MoviesData>({
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
  recentMovies: async(celebrityId: string, vo: RecentMoviesRequest): Promise<MaoYanResponse<RecentMovieItem[]>> =>{
    return mapYanTryCatch<MaoYanResponse<RecentMovieItem[]>>(apiRequest?.<RecentMoviesRequest, RecentMovieItem[]>({
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
  quantity: async(celebrityId: string, vo: QuantityRequest): Promise<MaoYanResponse<QuantityData>> =>{
    return mapYanTryCatch<MaoYanResponse<QuantityData>>(apiRequest?.<QuantityRequest, QuantityData>({
      vo,
      url: pathMap.celebrityApi.quantity([celebrityId]),
      key: createRequestKey('celebrityApi', 'quantity'),
    }).then(rlt => rlt ?? {}))
  },
}
