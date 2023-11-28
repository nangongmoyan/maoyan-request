import { convertPath } from "./utils/path"

export const serverConfig: ServerConfig = {
  empty :{
    i: '',
    m: '',
    wx: '',
    ad: '',
    iwx: '', 
    api: '',
    verify: '',
    monitor: '',
    passport: '',
    vodMovie: '',
  },
  release :{
    i: 'https://i.maoyan.com',
    m: 'https://m.maoyan.com',
    wx: 'https://wx.maoyan.com',
    ad: 'https://ad.maoyan.com',
    iwx: 'https://iwx.maoyan.com',
    api: 'https://api.maoyan.com',
    verify: 'https://verify.meituan.com',
    monitor: 'https://monitor.maoyan.com',
    passport: 'https://passport.meituan.com',
    vodMovie: 'https://vod-movie.maoyan.com',
  }
}

export const pathMap: PathMap = {
  i: {},
  m: {},
  wx: {},
  ad: {},
  iwx: {},
  api: {
    hotFilm: _ => convertPath('/mmdb/movie/v4/list/hot'), // 正在热映  
    reputation: _ => convertPath('/mmdb/movie/v2/reputation'), // 荣誉  
    hotTopic: _ => convertPath('/mmdb/support/hotTopic/list'), // 热点话题
    recommendTag: _ => convertPath('/mmdb/movie/recommendTag'), // 推荐标签 
    distribution: _ => convertPath('/mmdb/movie/distribution'), // 电影评分
    filmDetail: values => convertPath(`/mmdb/movie/v5/${values?.[0]}`, values), // 电影详情
    comingSoonFilm: _ => convertPath('/mmdb/movie/home/list/rt/order/coming'), // 即将上映  
    toBeScreenedFilm: _ => convertPath('/mmdb/movie/v1/list/wish/order/coming'), // 待映推荐  
    celebrityInfo: values => convertPath(`/mmdb/v6/celebrity/${values?.[0]}`, values), // 演员信息
    filmPhotos: values => convertPath(`/mmdb/movie/photos/${values?.[0]}/list`, values), // 电影照片
    playPlatform : values => convertPath(`/mmdb/movie/playplatform/${values?.[0]}`, values), // 播放平台 
    celebrities : values => convertPath(`/mmdb/v9/movie/${values?.[0]}/celebrities`, values), // 电影演职人员 
    celebrityPhotos : values => convertPath(`/mmdb/v7/celebrity/${values?.[0]}/photos`, values) // 演员照片
  },
  verify: {},
  monitor: {},
  passport: {
    loginInSmsStep1: _ => convertPath('/api/v3/account/mobileloginapply')
  },
  vodMovie: {},
}