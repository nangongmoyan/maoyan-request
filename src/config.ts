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
    nangongmoyan: ''
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
    nangongmoyan: 'http://s4xfc77q0.hn-bkt.clouddn.com'
  }
}

export const pathMap: PathMap = {
  deployApi:{
    city: _ => convertPath('/city'), // 城市数据
    homeTab: _ => convertPath('/sns/common/feed/channel/type'), // 首页Tab
  },
  commentApi:{
    comments: _ => convertPath('/review/v2/comments'), // 评论列表
    hotTopic: _ => convertPath('/review/topic/hotList'), // 热议话题
    information: _ => convertPath('/review/v1/comments/info'), // 评论详情
    hotTag: _ => convertPath('/review/v2/comments/movie/hotTag'), // 评论标签
    tagAndTopic: _ => convertPath('/review/v2/comments/movie/tagAndTopic'), // 标签和主题
  },
  replyApi:{
    replies: _ => convertPath('/review/v1/comments/replies'), // 回复列表
  },
  movieApi: {
    hot: _ => convertPath('/mmdb/movie/v4/list/hot'), // 正在热映  
    realtime: _ => convertPath('/review/realtime/data'), // 购票评分实时
    reputation: _ => convertPath('/mmdb/movie/v2/reputation'), // 影片荣誉  
    activity: _ => convertPath('/market/chief/bonus/activity'), // 影片活动  
    recommendTag: _ => convertPath('/mmdb/movie/recommendTag'), // 推荐标签 
    distribution: _ => convertPath('/mmdb/movie/distribution'), // 影片评分
    wishRecords: _ => convertPath('/review/movie/wish/records'), // 想看记录列表
    hotVideos: _ => convertPath('/sns/common/detail/hot/videos'), // 热门短视频
    coming: _ => convertPath('/mmdb/movie/home/list/rt/order/coming'), // 即将上映 
    videos: _ => convertPath('/sns/common/video/commend/module/videos'), // 影片视频 
    wishComing: _ => convertPath('/mmdb/movie/v1/list/wish/order/coming'), // 待映推荐 
    detail: values => convertPath(`/mmdb/movie/v5/${values?.[0]}`, values), // 影片详情
    photos: values => convertPath(`/mmdb/movie/photos/${values?.[0]}/list`, values), // 影片照片
    playplatform : values => convertPath(`/mmdb/movie/playplatform/${values?.[0]}`, values), // 播放平台 
    celebrities : values => convertPath(`/mmdb/v9/movie/${values?.[0]}/celebrities`, values), // 影片演职人员 
  },
  celebrityApi:{
    information: values => convertPath(`/mmdb/v6/celebrity/${values?.[0]}`, values), // 演员信息
    photos : values => convertPath(`/mmdb/v7/celebrity/${values?.[0]}/photos`, values), // 演员照片
    quantity: values => convertPath(`/mmdb/celebrity/${values?.[0]}/quantity`, values), // 演员份量
    movies: values => convertPath(`/mmdb/celebrity/${values?.[0]}/rank/movies`, values), // 演员电影
    relationship: values => convertPath(`/mmdb/celebrity/${values?.[0]}/relationship`, values), // 演员关系
    performance: values => convertPath(`/mmdb/celebrity/${values?.[0]}/work/performance`, values), // 演员表演
    recentMovies: values => convertPath(`/mmdb/celebrity/${values?.[0]}/v3/recentMovies`, values), // 演员近期电影
  },
  cheerfulApi: {
    secretRoom:  _ => convertPath('/avitrade/gateway/resk/project/list'), // 密室玩乐
    scriptKill:  _ => convertPath('/maoyansh/myshow/ajax/movie/scriptKill'), // 沉浸剧场
    wonderShow:  _ => convertPath('/maoyansh/myshow/ajax/movie/wonderShow'), // 精彩玩乐
  },
  attractionApi:{
    sights:  _ => convertPath('/avitrade/gateway/attractions/homes/sights'), // 景点门票
  },
  waterfallApi: {
    feedChannel: _ => convertPath('/sns/common/feed/channel/v2/list') // 瀑布流
  },
  carouselApi: {
    detail: _ => convertPath('/api/position/detail') // 瀑布流
  },
  videoApi: {
    onlineMovies: _ => convertPath('/vod/video/onlineMovies') //猫眼放映厅
  },
  cinemaApi:{
    moreCinemas: _ => convertPath('/ajax/moreCinemas'), // 影院列表
    show: _ => convertPath('/mtrade/cinema/cinema/shows'), // 
    filterCinemas: _ => convertPath('/ajax/filterCinemas'), // 影院筛选条件
    detail: _ => convertPath('/api/mtrade/mmcs/cinema/v1/cinema'), // 影院详情
  }

  // hotTopic: _ => convertPath('/mmdb/support/hotTopic/list'), // 热点话题
}