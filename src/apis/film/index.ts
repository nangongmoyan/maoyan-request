import { pathMap } from "../../config"
import instanceMap from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!
/** 电影相关的api */
export const filmApi = {
  /**
   * 正在热映
   * @author nangongmoyan
   * @param vo
   * @returns
   */
  hotFilm: async(vo: MaoYanFilm.Hot.Request): Promise<FilmBase.FilmsData> => {
    return mapYanTryCatch<FilmBase.FilmsData>(apiRequest<MaoYanFilm.Hot.Request, MaoYanFilm.FilmResponeseOne>({
      vo,
      url: pathMap.api.hotFilm(),
      key: createRequestKey('filmApi', 'hotFilm'),
    }).then(rlt => rlt?.data?.hot ?? []))
  },

  /**
   * 即将上映
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  comingSoonFilm: async(vo: MaoYanFilm.ComingSoon.Request): Promise<FilmBase.FilmsData> => {
    return mapYanTryCatch<FilmBase.FilmsData>(apiRequest<MaoYanFilm.ComingSoon.Request, MaoYanFilm.FilmResponeseOne>({
      vo,
      url: pathMap.api.comingSoonFilm(),
      key: createRequestKey('filmApi', 'comingSoonFilm'),
    }).then(rlt => rlt?.data?.coming ?? []))
  },

  /**
   * 待映推荐
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  toBeScreenedFilm: async(vo: MaoYanFilm.ToBeScreened.Request): Promise<FilmBase.FilmsData> => {
    return mapYanTryCatch<FilmBase.FilmsData>(apiRequest<MaoYanFilm.ToBeScreened.Request, MaoYanFilm.FilmResponeseOne>({
      vo,
      url: pathMap.api.toBeScreenedFilm(),
      key: createRequestKey('filmApi', 'toBeScreenedFilm'),
    }).then(rlt=> rlt?.data?.coming ?? []))
  },

  /**
   * 电影详情
   * @author nangongmoyan
   * @param detailId 
   * @param vo 
   * @returns 
   */
  filmDetail: async(detailId: string, vo: MaoYanFilm.Detail.Request): Promise<FilmBase.FilmDetail> =>{
    return mapYanTryCatch<FilmBase.FilmDetail>(apiRequest?.<MaoYanFilm.Detail.Request, MaoYanFilm.Detail.Data>({
      vo : { extra : true, ...vo},
      url: pathMap.api.filmDetail([detailId]),
      key: createRequestKey('filmApi', 'filmDetail'),
    }).then(rlt => rlt?.data?.movie ?? {}))
  },

  /**
   *  播放平台
   * @author nangongmoyan
   * @param detailId 
   * @param vo 
   * @returns 
   */
  playPlatform: async(detailId: string, vo: MaoYanFilm.PlayPlatform.Request): Promise<MaoYanFilm.PlayPlatform.PlayPlatformItem[]> =>{
    return mapYanTryCatch<MaoYanFilm.PlayPlatform.PlayPlatformItem[]>(apiRequest?.<MaoYanFilm.PlayPlatform.Request, MaoYanFilm.PlayPlatform.PlayPlatformItem[]>({
      vo,
      url: pathMap.api.playPlatform([detailId]),
      key: createRequestKey('filmApi', 'playPlatform'),
    }).then(rlt => rlt?.data ?? []))
  },


  /**
   * 电影照片
   * @author nangongmoyan
   * @param detailId 
   * @param vo  - topPhotoIds为逗号拼接的字符串
   * @returns 
   */
  filmPhotos: async(detailId: string, vo: MaoYanFilm.FilmPhotos.Request): Promise<MaoYanFilm.FilmPhotos.PhotosItem[]> =>{
    return mapYanTryCatch<MaoYanFilm.FilmPhotos.PhotosItem[]>(apiRequest?.<MaoYanFilm.FilmPhotos.Request, MaoYanFilm.FilmPhotos.PhotosItem[]>({
      vo,
      url: pathMap.api.filmPhotos([detailId]),
      key: createRequestKey('filmApi', 'filmPhotos'),
    }).then(rlt => rlt?.data ?? []))
  },

  /**
   * 影片荣誉
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  reputation: async(vo: MaoYanFilm.Reputation.Request): Promise<MaoYanFilm.Reputation.Data> => {
    return mapYanTryCatch<MaoYanFilm.Reputation.Data>(apiRequest<MaoYanFilm.Reputation.Request, MaoYanFilm.Reputation.Data>({
      vo,
      url: pathMap.api.reputation(),
      key: createRequestKey('filmApi', 'reputation'),
    }).then(rlt=> rlt.data ?? {}))
  },

  /**
   * 推荐标签
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  recommendTag: async(vo: MaoYanFilm.RecommendTag.Request): Promise<MaoYanFilm.RecommendTag.Data> => {
    return mapYanTryCatch<MaoYanFilm.RecommendTag.Data>(apiRequest<MaoYanFilm.RecommendTag.Request, MaoYanFilm.RecommendTag.Data>({
      vo,
      url: pathMap.api.recommendTag(),
      key: createRequestKey('filmApi', 'recommendTag'),
    }).then(rlt=> rlt.data ?? {}))
  },

  /**
   * 电影评分
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  distribution: async(vo: MaoYanFilm.Distribution.Request): Promise<MaoYanFilm.Distribution.Data> => {
    return mapYanTryCatch<MaoYanFilm.Distribution.Data>(apiRequest<MaoYanFilm.Distribution.Request, MaoYanFilm.Distribution.Data>({
      vo,
      url: pathMap.api.distribution(),
      key: createRequestKey('filmApi', 'distribution'),
    }).then(rlt=> rlt.data ?? {}))
  },

  /**
   * 电影演职人员 
   * @author nangongmoyan
   * @param detailId 
   * @param vo 
   * @returns 
   */
  celebrities: async(detailId: string, vo: MaoYanFilm.Celebrities.Request): Promise<MaoYanFilm.Celebrities.Data> =>{
    return mapYanTryCatch<MaoYanFilm.Celebrities.Data>(apiRequest?.<MaoYanFilm.Celebrities.Request, MaoYanFilm.Celebrities.Data>({
      vo,
      url: pathMap.api.celebrities([detailId]),
      key: createRequestKey('filmApi', 'celebrities'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
   * 热点话题
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  hotTopic: async(vo: MaoYanFilm.HotTopic.Request): Promise<MaoYanFilm.HotTopic.Data> => {
    return mapYanTryCatch<MaoYanFilm.HotTopic.Data>(apiRequest<MaoYanFilm.HotTopic.Request, MaoYanFilm.HotTopic.Data>({
      vo,
      url: pathMap.api.hotTopic(),
      key: createRequestKey('filmApi', 'hotTopic'),
    }).then(rlt=> rlt.data ?? {}))
  },

  /**
   * 演员信息
   * @author nangongmoyan
   * @param celebrityId 
   * @param vo 
   * @returns 
   */
  celebrityInfo: async(celebrityId: string, vo: MaoYanFilm.CelebrityInfo.Request): Promise<MaoYanFilm.CelebrityInfo.Data> =>{
    return mapYanTryCatch<MaoYanFilm.CelebrityInfo.Data>(apiRequest?.<MaoYanFilm.CelebrityInfo.Request, MaoYanFilm.CelebrityInfo.Data>({
      vo,
      url: pathMap.api.celebrityInfo([celebrityId]),
      key: createRequestKey('filmApi', 'celebrityInfo'),
    }).then(rlt => rlt?.data ?? {}))
  },

  /**
   * 演员照片
   * @author nangongmoyan
   * @param celebrityId 
   * @param vo 
   * @returns 
   */
  celebrityPhotos: async(celebrityId: string, vo: MaoYanFilm.CelebrityPhotos.Request): Promise<MaoYanFilm.CelebrityPhotos.Data> =>{
    return mapYanTryCatch<MaoYanFilm.CelebrityPhotos.Data>(apiRequest?.<MaoYanFilm.CelebrityPhotos.Request, MaoYanFilm.CelebrityPhotos.Data>({
      vo,
      url: pathMap.api.celebrityPhotos([celebrityId]),
      key: createRequestKey('filmApi', 'celebrityPhotos'),
    }).then(rlt => rlt?.data ?? {}))
  },

}

