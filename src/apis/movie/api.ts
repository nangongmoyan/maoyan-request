import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse, MovieDetail, MovieItem } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { ActivityData, ActivityRequest, CelebrityRequest, ComingSoonRequest, DistributionData, DistributionRequest, HotRequest, HotVideosData, HotVideosRequest, MovieDetailData, MovieDetailRequest, MoviePhotoItem, MoviePhotosRequest, MovieResponeseOne, PlayPlatformItem, PlayPlatformRequest, RealtimeData, RealtimeRequest, RecommendTagData, RecommendTagRequest, ReputationData, ReputationRequest, ToBeScreenedRequest, VideosData, VideosRequest, WishRecordItem, WishRecordsRequest } from "./types"

const apiRequest = instanceMap.get('api')?.request!
/** 电影相关的api */
export const movieApi = {
  /**
   * 正在热映
   * @author nangongmoyan
   * @param vo
   * @returns
   */
  hot: async(vo: HotRequest): Promise<MovieItem[]> => {
    return mapYanTryCatch<MovieItem[]>(apiRequest<HotRequest, MovieResponeseOne>({
      vo,
      url: pathMap.movieApi.hot(),
      key: createRequestKey('movieApi', 'hot'),
    }).then(rlt => rlt?.data?.hot ?? []))
  },

  /**
   * 即将上映
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  coming: async(vo: ComingSoonRequest): Promise<MovieItem[]> => {
    return mapYanTryCatch<MovieItem[]>(apiRequest<ComingSoonRequest, MovieResponeseOne>({
      vo,
      url: pathMap.movieApi.coming(),
      key: createRequestKey('movieApi', 'coming'),
    }).then(rlt => rlt?.data?.coming ?? []))
  },

  /**
   * 待映推荐
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  wishComing: async(vo: ToBeScreenedRequest): Promise<MovieItem[]> => {
    return mapYanTryCatch<MovieItem[]>(apiRequest<ToBeScreenedRequest, MovieResponeseOne>({
      vo,
      url: pathMap.movieApi.wishComing(),
      key: createRequestKey('movieApi', 'wishComing'),
    }).then(rlt=> rlt?.data?.coming ?? []))
  },

  /**
   * 影片详情
   * @author nangongmoyan
   * @param detailId 
   * @param vo 
   * @returns 
   */
  detail: async(detailId: string, vo: MovieDetailRequest): Promise<MovieDetail> =>{
    return mapYanTryCatch<MovieDetail>(apiRequest?.<MovieDetailRequest, MovieDetailData>({
      vo : { extra : true, ...vo},
      url: pathMap.movieApi.detail([detailId]),
      key: createRequestKey('movieApi', 'detail'),
    }).then(rlt => rlt?.data?.movie ?? {}))
  },

  /**
   *  播放平台
   * @author nangongmoyan
   * @param detailId 
   * @param vo 
   * @returns 
   */
  playplatform: async(detailId: string, vo: PlayPlatformRequest): Promise<MaoYanResponse<PlayPlatformItem[]>> =>{
    return mapYanTryCatch<MaoYanResponse<PlayPlatformItem[]>>(apiRequest?.<PlayPlatformRequest, PlayPlatformItem[]>({
      vo,
      url: pathMap.movieApi.playplatform([detailId]),
      key: createRequestKey('movieApi', 'playplatform'),
    }).then(rlt => rlt ?? {}))
  },


  /**
   * 影片照片
   * @author nangongmoyan
   * @param detailId 
   * @param vo  - topPhotoIds为逗号拼接的字符串
   * @returns 
   */
  photos: async(detailId: string, vo: MoviePhotosRequest): Promise<MaoYanResponse<MoviePhotoItem[]>> =>{
    return mapYanTryCatch<MaoYanResponse<MoviePhotoItem[]>>(apiRequest?.<MoviePhotosRequest, MoviePhotoItem[]>({
      vo,
      url: pathMap.movieApi.photos([detailId]),
      key: createRequestKey('movieApi', 'photos'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 影片荣誉
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  reputation: async(vo: ReputationRequest): Promise<MaoYanResponse<ReputationData>> => {
    return mapYanTryCatch<MaoYanResponse<ReputationData>>(apiRequest<ReputationRequest, ReputationData>({
      vo,
      url: pathMap.movieApi.reputation(),
      key: createRequestKey('movieApi', 'reputation'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 推荐标签
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  recommendTag: async(vo: RecommendTagRequest): Promise<MaoYanResponse<RecommendTagData>> => {
    return mapYanTryCatch<MaoYanResponse<RecommendTagData>>(apiRequest<RecommendTagRequest, RecommendTagData>({
      vo,
      url: pathMap.movieApi.recommendTag(),
      key: createRequestKey('movieApi', 'recommendTag'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 影片评分
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  distribution: async(vo: DistributionRequest): Promise<MaoYanResponse<DistributionData>> => {
    return mapYanTryCatch<MaoYanResponse<DistributionData>>(apiRequest<DistributionRequest, DistributionData>({
      vo,
      url: pathMap.movieApi.distribution(),
      key: createRequestKey('movieApi', 'distribution'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 影片演职人员 
   * @author nangongmoyan
   * @param detailId 
   * @param vo 
   * @returns 
   */
  celebrities: async(detailId: string, vo: CelebrityRequest): Promise<CelebrityRequest> =>{
    return mapYanTryCatch<CelebrityRequest>(apiRequest?.<CelebrityRequest, CelebrityRequest>({
      vo,
      url: pathMap.movieApi.celebrities([detailId]),
      key: createRequestKey('movieApi', 'celebrities'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
   * 影片视频 
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  videos: async(vo: VideosRequest): Promise<MaoYanResponse<VideosData>> => {
    return mapYanTryCatch<MaoYanResponse<VideosData>>(apiRequest<VideosRequest, VideosData>({
      vo,
      url: pathMap.movieApi.videos(),
      key: createRequestKey('movieApi', 'videos'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 热门短视频
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  hotVideos: async(vo: HotVideosRequest): Promise<MaoYanResponse<HotVideosData>> => {
    return mapYanTryCatch<MaoYanResponse<HotVideosData>>(apiRequest<HotVideosRequest, HotVideosData>({
      vo,
      url: pathMap.movieApi.hotVideos(),
      key: createRequestKey('movieApi', 'hotVideos'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 影片活动
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  activity: async(vo: ActivityRequest): Promise<MaoYanResponse<ActivityData>> => {
    return mapYanTryCatch<MaoYanResponse<ActivityData>>(apiRequest<ActivityRequest, ActivityData>({
      vo,
      url: pathMap.movieApi.activity(),
      key: createRequestKey('movieApi', 'activity'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 购票评分实时
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  realtime: async(vo: RealtimeRequest): Promise<MaoYanResponse<RealtimeData>> => {
    return mapYanTryCatch<MaoYanResponse<RealtimeData>>(apiRequest<RealtimeRequest, RealtimeData>({
      vo,
      url: pathMap.movieApi.realtime(),
      key: createRequestKey('movieApi', 'realtime'),
    }).then(rlt=> rlt ?? {}))
  },

  /**
   * 想看记录列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  wishRecords: async(vo: WishRecordsRequest): Promise<MaoYanResponse<WishRecordItem[]>> => {
    return mapYanTryCatch<MaoYanResponse<WishRecordItem[]>>(apiRequest<WishRecordsRequest, WishRecordItem[]>({
      vo,
      url: pathMap.movieApi.wishRecords(),
      key: createRequestKey('movieApi', 'wishRecords'),
    }).then(rlt=> rlt ?? {}))
  },


  // /**
  //  * 热点话题
  //  * @author nangongmoyan
  //  * @param vo 
  //  * @returns 
  //  */
  // hotTopic: async(vo: MaoYanFilm.HotTopic.Request): Promise<MaoYanFilm.HotTopic.Data> => {
  //   return mapYanTryCatch<MaoYanFilm.HotTopic.Data>(apiRequest<MaoYanFilm.HotTopic.Request, MaoYanFilm.HotTopic.Data>({
  //     vo,
  //     url: pathMap.api.hotTopic(),
  //     key: createRequestKey('movieApi', 'hotTopic'),
  //   }).then(rlt=> rlt.data ?? {}))
  // },







}

