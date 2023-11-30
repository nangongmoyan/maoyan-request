import { pathMap } from "../../config"
import instanceMap from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!
/** 电影相关的api */
export const movieApi = {
  /**
   * 正在热映
   * @author nangongmoyan
   * @param vo
   * @returns
   */
  hot: async(vo: MaoYanMovie.Hot.Request): Promise<MovieBase.MoviesData> => {
    return mapYanTryCatch<MovieBase.MoviesData>(apiRequest<MaoYanMovie.Hot.Request, MaoYanMovie.MovieResponeseOne>({
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
  coming: async(vo: MaoYanMovie.ComingSoon.Request): Promise<MovieBase.MoviesData> => {
    return mapYanTryCatch<MovieBase.MoviesData>(apiRequest<MaoYanMovie.ComingSoon.Request, MaoYanMovie.MovieResponeseOne>({
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
  wishComing: async(vo: MaoYanMovie.ToBeScreened.Request): Promise<MovieBase.MoviesData> => {
    return mapYanTryCatch<MovieBase.MoviesData>(apiRequest<MaoYanMovie.ToBeScreened.Request, MaoYanMovie.MovieResponeseOne>({
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
  detail: async(detailId: string, vo: MaoYanMovie.Detail.Request): Promise<MovieBase.MovieDetail> =>{
    return mapYanTryCatch<MovieBase.MovieDetail>(apiRequest?.<MaoYanMovie.Detail.Request, MaoYanMovie.Detail.Data>({
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
  playplatform: async(detailId: string, vo: MaoYanMovie.PlayPlatform.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.PlayPlatform.PlayPlatformItem[]>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.PlayPlatform.PlayPlatformItem[]>>(apiRequest?.<MaoYanMovie.PlayPlatform.Request, MaoYanMovie.PlayPlatform.PlayPlatformItem[]>({
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
  photos: async(detailId: string, vo: MaoYanMovie.MoviePhotos.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.MoviePhotos.PhotosItem[]>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.MoviePhotos.PhotosItem[]>>(apiRequest?.<MaoYanMovie.MoviePhotos.Request, MaoYanMovie.MoviePhotos.PhotosItem[]>({
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
  reputation: async(vo: MaoYanMovie.Reputation.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.Reputation.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.Reputation.Data>>(apiRequest<MaoYanMovie.Reputation.Request, MaoYanMovie.Reputation.Data>({
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
  recommendTag: async(vo: MaoYanMovie.RecommendTag.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.RecommendTag.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.RecommendTag.Data>>(apiRequest<MaoYanMovie.RecommendTag.Request, MaoYanMovie.RecommendTag.Data>({
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
  distribution: async(vo: MaoYanMovie.Distribution.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.Distribution.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.Distribution.Data>>(apiRequest<MaoYanMovie.Distribution.Request, MaoYanMovie.Distribution.Data>({
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
  celebrities: async(detailId: string, vo: MaoYanMovie.Celebrities.Request): Promise<MaoYanMovie.Celebrities.Data> =>{
    return mapYanTryCatch<MaoYanMovie.Celebrities.Data>(apiRequest?.<MaoYanMovie.Celebrities.Request, MaoYanMovie.Celebrities.Data>({
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
  videos: async(vo: MaoYanMovie.Videos.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.Videos.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.Videos.Data>>(apiRequest<MaoYanMovie.Videos.Request, MaoYanMovie.Videos.Data>({
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
  hotVideos: async(vo: MaoYanMovie.HotVideos.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.HotVideos.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.HotVideos.Data>>(apiRequest<MaoYanMovie.HotVideos.Request, MaoYanMovie.HotVideos.Data>({
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
  activity: async(vo: MaoYanMovie.Activity.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.Activity.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.Activity.Data>>(apiRequest<MaoYanMovie.Activity.Request, MaoYanMovie.Activity.Data>({
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
  realtime: async(vo: MaoYanMovie.Realtime.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.Realtime.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.Realtime.Data>>(apiRequest<MaoYanMovie.Realtime.Request, MaoYanMovie.Realtime.Data>({
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
  wishRecords: async(vo: MaoYanMovie.WishRecords.Request): Promise<RequestBase.MaoYanResponse<MaoYanMovie.WishRecords.WishRecordItem[]>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<MaoYanMovie.WishRecords.WishRecordItem[]>>(apiRequest<MaoYanMovie.WishRecords.Request, MaoYanMovie.WishRecords.WishRecordItem[]>({
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

