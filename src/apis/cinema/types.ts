import { CinemaBaseItem, CinemaMovieBaseItem, MaoYanLocation, Paging } from "../../types";

/* ------------------- 影院筛选条件 ------------------ */
export interface FilterSubItem {
  count:    number;
  id:       number;
  name:     string;
  subItems: FilterSubItem[];
}

export interface FilterCinema {
  name:     string;
  subItems: FilterSubItem[];
}

export interface FilterCinemasRequest {}

export interface FilterCinemasData {
  brand:      FilterCinema;
  district:   FilterCinema;
  hallType:   FilterCinema;
  service:    FilterCinema;
  showType:   null;
  subway:     FilterCinema;
  timeRanges: FilterCinema;
}

/* ------------------- 影院列表 ------------------ */
export interface MoreCinemasRequest extends MaoYanLocation {
  offset: number
  limit: number
  /** 影片id */
  movieId?: number
  day?: string // 哪一天
}

export interface CinemaCTPois {
  ct_poi: string;
  poiid:  number;
}

export interface MoreCinemasData {
  cinemas: CinemaBaseItem[];
  ct_pois: CinemaCTPois[];
  paging:  Paging;
}

/* -------------------  ------------------ */
export interface VipInfo {
  isCardSales: number;
  process:     string;
  // tag:         Tag;
  title:       string;
  url:         string;
}

export interface StoneData {
  base64:             {};
  resultCode:         number;
  resultMessage:      string;
  cssSource:          string;
  unicodeMap:         null;
  __isset_bit_vector: number[];
  optionals:          string[];
}

export interface ShowRequest {
  cinemaId: number // 影院id
}

export interface ShowData {
  cinemaId:            number;
  cinemaName:          string;
  cityCardInfo:        any[];
  modeSwitchThreshold: number;
  movies:              CinemaMovieBaseItem[];
  poiId:               number;
  selectedMovieSeq:    number;
  sell:                boolean;
  stringPoiId:         string;
  tips:                string;
  vipInfo:             VipInfo[];
  stoneData:           StoneData;
}

/* ------------------- 影院详情 ------------------ */
interface FeatureTag {
  color: string;
  desc:  string;
  icon:  string;
  tag:   string;
  type:  number;
  url:   string;
}

interface LicenseList {
  img:   string;
  title: string;
}

interface CinemaLicenseInfo {
  desc:        string;
  licenseList: LicenseList[];
  title:       string;
}

interface Info {
  desc:        string;
  hasProm?:    number;
  icon:        string;
  superScript: string;
  title:       string;
  url:         string;
  type?:       number;
}

interface CallboardInfo {
  desc: string;
  url:  string;
}

export interface CinemaDetailRequest {
  cinemaId: number // 影院id
}

export interface CinemaDetailData {
addr:                 string;
buyoutInfo:           null;
callboardInfo:        CallboardInfo;
cinemaCouponPackInfo: Info;
cinemaId:             number;
cinemaLicenseInfo:    CinemaLicenseInfo;
couponInfo:           null;
endorseInfo:          null;
fansMeetingInfo:      null;
featureTags:          FeatureTag[];
follow:               number;
headImg:              string;
lat:                  number;
lng:                  number;
mallInfo:             null;
nm:                   string;
notice:               string;
poiId:                number;
refundInfo:           null;
roadLeading:          string;
s:                    number;
s1:                   number;
s2:                   number;
s3:                   number;
saleInfo:             null;
sell:                 boolean;
shopId:               number;
shopUuid:             string;
snum:                 number;
stringPoiId:          string;
stringShopId:         string;
tel:                  string;
vipInfo:              Info;
}