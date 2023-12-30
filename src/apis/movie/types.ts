import { FeedBaseItem, MovieChiefBonus, MovieDetail, MovieEventTracking, MovieItem, MovieStid, Paging, RecommendAd } from "../../types";

/* ------------------- 响应类型1 ------------------ */
export interface MovieResponeseOne {
  chiefBonus:     { [key: string]: MovieChiefBonus[] }; //
  coming:         MovieItem[]; //
  hot:            MovieItem[]; //
  movieIds:       number[]; //
  paging?:        Paging;
  recommendAds?:  RecommendAd[];
  schemaUrl:      string; //
  showLimit:      number; //
  stid:           string; //
  stids:          MovieStid[]; //
  total:          number; //
}

/* ------------------- 正在热映 ------------------ */
export interface HotRequest {
  utm_medium?:  string; //
  open?:        string; //
  homepage?:    string; // 
  extra?:       boolean; //
}
/* ------------------- 即将上映 ------------------ */
export interface ComingSoonRequest {
  uuid?:  string ; //
  extra?: boolean; //
}

/* ------------------- 影片详情 ------------------ */
export interface ToBeScreenedRequest {
  uuid?:      string ; //
  extra?:     boolean; //
  homepage?:  string; // 
}

/* ------------------- 待映推荐 ------------------ */
export interface MovieDetailRequest {
  extra?: boolean // 额外数据
}

export interface MovieDetailData {
  movie: MovieDetail
}

/* ------------------- 播放平台 ------------------ */
export interface PlayPlatformRequest {}

export interface PlayPlatformLink {
  appPlayLink:    string;
  episodeNum:     number;
  fieldSource:    string;
  movieId:        number;
  platform:       number;
  playDuration:   number;
  playLink:       string;
  playPermission: number;
}

export interface PlayPlatformItem {
  fieldSource:    string;
  iconUrl:        string;
  information:    string;
  isShow:         number;
  level:          number;
  links:          PlayPlatformLink[];
  mgeType?:       string;
  movieId:        number;
  name:           string;
  netReleaseTime: Date;
  platform:       number;
  type:           number;
}

/* ------------------- 影片照片 ------------------ */
export interface MoviePhotosRequest {
  type?: number
  topPhotoIds?: string
}

export interface MoviePhotoPhoto {
  approve: number;
  id:      number;
  olink:   string;
  tlink:   string;
  type:    number;
}

export interface MoviePhotoItem {
  photos: MoviePhotoPhoto[];
  size:   number;
}

/* ------------------- 影片荣誉 ------------------ */
export interface ReputationRequest {
  movieId: number
}

export interface ReputationData {
  content:        string;
  firstWord:      string;
  image:          string;
  jumperUrl:      string;
  movieBoardType: number;
  movieRank:      number;
  secondWord:     string;
  term:           number;
  year:           number;
}

/* ------------------- 推荐标签 ------------------ */
export interface RecommendTagRequest {
  movieId: number
}
export interface RecommendTagData {
  content: string;
  count:   string;
  left:    string;
  right:   string;
}

/* ------------------- 影片评分 ------------------ */
export interface DistributionRequest {
  movieId: number
}

export interface DistributionItem {
  level:      string;
  percent:    number;
  setLevel:   boolean;
  setPercent: boolean;
}

export interface DistributionData {
  schema:                   string;
  provinceIdstributionDesc: string;
  distribution:             DistributionItem[];
}

/* ------------------- 影片演职人员 ------------------ */

export interface CelebrityItem {
  avatar:           string;
  cnm:              string;
  cr:               number;
  desc:             string;
  enm:              string;
  id:               number;
  ocr:              number;
  roles:            string;
  showAvatarDetail: boolean;
  still:            string;
  voice?:           string;
}

export interface CelebrityRequest {}

export interface CelebrityRequest {
  total: number;
  list:  CelebrityItem[][];
}

/* ------------------- 影片视频 ------------------ */
export interface FeedItem extends FeedBaseItem {
  eventTracking: MovieEventTracking;
}

export interface VideoCommendModuleVOListItem {
  moduleId:    number;
  moduleName:  string;
  schema:      string;
  videoCount:  number;
  videoImage?: string;
  index?:      number;
}

export interface VideosRequest {
  movieId: number // 电影id
  offset: number // 页数
  limit: number // 每页数量
  timeStamp: Date //时间戳
}

export interface VideosData {
  feeds:                    FeedItem[];
  paging:                   Paging;
  timestamp:                number;
  videoCommendModuleVOList: VideoCommendModuleVOListItem[];
}

/* ------------------- 热门短视频 ------------------ */
export interface HotVideoItem {
  approve:  number;
  id:       number;
  videoUrl: string;
}

export interface HotVideosImage {
  authorId: number;
  height:   number;
  id:       number;
  sizeType: string;
  targetId: number;
  url:      string;
  width:    number;
}

export interface HotVideosTag {
  content: string;
  url:     string;
}

export interface VideoVideo {
  commentCount: number;
  id:           number;
  movieId:      number;
  playCount:    number;
  url:          string;
}

export interface VideoElement {
  approve: number;
  id:      number;
  image:   HotVideosImage;
  tag?:    HotVideosTag;
  video:   VideoVideo;
}

export interface HotVideosRequest {
  movieId: number // 电影id
  offset: number // 页数
  limit: number // 每页数量
}

export interface HotVideosData {
  hotVideos: HotVideoItem[];
  name:      string;
  schema:    string;
  total:     number;
  videos:    VideoElement[];
}

/* ------------------- 影片活动 ------------------ */
export interface ActivityRequest {}

export interface ActivityData {
  hasActivity:  boolean;
  hasBonus:     boolean;
  activityInfo: null;
  bonusInfo:    null;
}

/* ------------------- 购票评分实时 ------------------ */
export interface RealtimeRequest {
  movieId: number; //影片id
}

export interface RealtimeData {
  wish:    number; // 想看
  watched: number; // 看过
  snum:    number; // 评分数量
}

/* ------------------- 想看记录列表 ------------------ */
export interface WishRecordsRequest {}

export interface WishRecordItem {
  avatars:   string[];
  markTime:  string;
  timeCount: number;
  timeUnit:  number;
}