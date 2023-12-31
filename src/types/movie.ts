import { ShowStateButton } from "./common";

/** 评分标签枚举 */
export enum MovieScoreLabel {
  NoRate = "暂无评分",
  MaoYanRate = "猫眼购票评分"
}



/** */
export enum MovieVer {
  Empty = "",
  The2D = "2D",
}

export enum MovieMutlidutys {
  Actor = "演员",
  ActorsSinging = "演员,演唱",
  Acknowledgments = "鸣谢",
}

export enum MovieEventTracking {
  Preview = "preview",
}

export enum MovieLang {
  Chinese = "国语",
  Japanese = "日语",
  English = "英语",
}

export enum MovieTp {
  The2D = "2D",
  The3D = "3D",
}

/** 首席奖金 */
export interface MovieChiefBonus {
  chiefAvatarUrl: string; //首席头像
  chiefName:      string; // 首席名称
}

/** */
export interface MovieStid {
  movieId: number; //
  stid:    string; //
}

/** */
export interface MovieSubImageVO {
  autoCarousel: boolean; //
  images: {
    id:  number; //
    url: string; //
  }[]; //
}

/** */
export interface MovieExtraVO {
  subImageVO: MovieSubImageVO; //
  wishAnimation?: {
    url: string; //
  };
}


export interface RecommendAd {
  adId:       number; //
  frame:      number; //
  materialId: number; //
  movieId:    number; //
  positionId: number; //
}

export interface Distribution {
  movieScoreLevel: string;
  proportion:      string;
}

export interface ShortComment {
  content:  string;
  location: number;
}

export interface MovieBaseItem {
  bingeWatch:       number;
  cat:              string;
  dir:              string;
  dur:              number;
  globalReleased:   boolean;
  id:               number;
  img:              string;
  movieExtraVO?:    MovieExtraVO;
  movieType:        number;
  nm:               string;
  pn:               number;
  proScore:         number;
  proScoreNum:      number;
  pubDate:          number;
  pubDesc:          string;
  rt:               Date;
  sc:               number;
  scm:              string;
  scoreLabel:       MovieScoreLabel;
  showInfo:         string;
  showst:           number;
  snum:             number;
  star:             string;
  ver:              MovieVer;
  videoName?:       string;
  videourl?:        string;
  vnum:             number;
  vodPlay:          boolean;
  wish:             number;
  wishst:           number;
}

// interface MovieBaseItem {
//   avatar:         string;
//   cat:            string;
//   cr:             number;
//   desc:           string;
//   dir:            string;
//   globalReleased: boolean;
//   id:             number;
//   mbox:           number;
//   multiroles:     string;
//   mutlidutys:     MovieMutlidutys;
//   name:           string;
//   order:          number;
//   pubDate:        number;
//   pubDesc:        string;
//   roleList:       number[];
//   rt:             string;
//   sc:             number;
//   showst:         number;
//   star:           string;
//   still:          string;
//   title:          string;
//   wish:           number;
//   wishst:         number;
//   worksType:      number;
//   worksTypeDesc:  string;
//   img?:           string;
// }

/** 电影对象 */
export interface MovieItem extends MovieBaseItem {
  boxInfo:          string;
  civilPubSt:       number;
  comingTitle:      string;
  desc:             string;
  effectShowNum:    number;
  followst:         number;
  haspromotionTag:  boolean;
  headLineShow:     boolean;
  isRevival:        boolean;
  late:             boolean;
  localPubSt:       number;
  mark:             boolean;
  mk:               number;
  preSale?:         number;
  preShow:          boolean;
  pubShowNum:       number;
  recentShowDate:   number;
  recentShowNum:    number;
  showCinemaNum:    number;
  showNum:          number;
  showStateButton?: ShowStateButton;
  showTimeInfo?:    string;
  totalShowNum?:    number;
  videoId:          number;
  fra?:             string;
  frt?:             string;
  ftime?:           string;
}

export interface MovieDetail extends MovieBaseItem {
  availableEpisodes: number;
  awardUrl:          string;
  backgroundColor:   string;
  bingeWatchst:      number;
  comScorePersona:   boolean;
  commented:         boolean;
  distributions:     Distribution[];
  dra:               string;
  egg:               boolean;
  enm:               string;
  episodeDur:        number;
  episodes:          number;
  filmAlias:         string;
  guideToWish:       boolean;
  latestEpisode:     number;
  minPriceContent:   string;
  modcsSt:           boolean;
  multiPub:          boolean;
  musicNum:          number;
  onSale:            boolean;
  onlinePlay:        boolean;
  orderSt:           number;
  oriLang:           string;
  photos:            string[];
  preScorePersona:   boolean;
  shortComment:      ShortComment;
  src:               string;
  trailerStyle:      number;
  type:              number;
  typeDesc:          string;
  vd:                string;
  videoImg:          string;
  viewedSt:          number;
  vodFreeSt:         number;
  vodSt:             number;
  watched:           number;
}

export interface Plist {
  baseSellPrice:       string;
  dimHighLight:        boolean;
  dt:                  Date;
  enterShowSeat:       number;
  extraDesc:           string;
  extraDescNew:        string;
  forbiddenTip:        string;
  hallTypeHighLight:   boolean;
  labelResource:       any[];
  lang:                MovieLang;
  languageHighLight:   boolean;
  packShowTag:         string;
  preShowTag:          string;
  reservedMin:         number;
  saleDate:            string;
  saleTimeText:        string;
  sellPr:              string;
  sellPrSuffix:        string;
  seqNo:               string;
  showClosedSeat:      number;
  showTag:             string;
  showTypeHighLight:   boolean;
  th:                  string;
  theatreSaleTimeTag:  boolean;
  ticketStatus:        number;
  ticketStatusContent: string;
  tm:                  string;
  tp:                  MovieTp;
  vipPrice:            string;
  vipPriceName:        string;
  vipPriceNameNew:     string;
  vipPriceSuffix:      string;
  zeroFlag:            string;
  smallFont:           boolean;
  displayOriginalPr:   boolean;
}

export interface Show {
  hasShow:         number;
  labelResource:   any[];
  plist:           Plist[];
  preInfo:         any[];
  preferential:    number;
  preferentialTag: null;
  showDate:        Date;
}


export interface CinemaMovieBaseItem {
  chiefBonus:      MovieChiefBonus;
  desc:            string;
  dur:             number;
  globalReleased:  boolean;
  id:              number;
  img:             string;
  labelResource:   any[];
  nm:              string;
  preferential:    number;
  preferentialTag: null;
  sc:              string;
  showCount:       number;
  shows:           Show[];
  wish:            number;
}

export interface FeedImageItem {
  hight:  number;
  url:    string;
  weight: number;
  id?:    number;
}

export interface FeedProduct {
  img?:      string;
  name:      string;
  productId: number;
  type:      number;
}

export interface FeedShareInfo {
  channel: number;
  content: string;
  img:     string;
  title:   string;
}

export interface FeedVideo {
  dur:       number;
  height:    number;
  id:        number;
  imgUrl:    string;
  typeDesc?: string;
  url:       string;
  viewCount: number;
  width:     number;
}

export interface FeedBaseItem {
  alreadyUp:     boolean;
  commentCount:  number;
  converterType: number;
  // eventTracking: EventTracking;
  id:            number;
  images:        FeedImageItem[];
  imgCount?:     number;
  jumperUrl?:    string;
  onlineTime?:   number;
  product:       FeedProduct;
  shareInfo:     FeedShareInfo;
  style:         number;
  title:         string;
  type:          number;
  upCount:       number;
  video:         FeedVideo;
}
