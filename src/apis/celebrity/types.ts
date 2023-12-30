import { MovieBaseItem, Paging } from "../../types";

/* ------------------- 演员信息 ------------------ */
export interface InformationRequest {}

export interface InformationData {
  aliasName:            string;
  attachUserId:         number;
  auth:                 number;
  avatar:               string;
  backgroundColor:      string;
  bgImg:                string;
  bgImgBackgroundColor: string;
  birthday:             Date;
  birthplace:           string;
  bloodType:            string;
  boardUrl:             string;
  cnm:                  string;
  company:              string;
  constellation:        string;
  deathDate:            string;
  desc:                 string;
  enm:                  string;
  fansName:             string;
  feedbackUrl:          string;
  followCount:          number;
  followRank:           number;
  followState:          number;
  graduateSchool:       string;
  height:               number;
  id:                   number;
  nation:               string;
  nationality:          string;
  photoNum:             number;
  photos:               string[];
  present:              number;
  presentImg:           string;
  proIntroUrl:          string;
  publicTitles:         any[];
  rank:                 number;
  receiveWord:          string;
  sendWord:             string;
  sexy:                 string;
  signImg:              string;
  still:                string;
  sumBox:               number;
  titleList:            string[];
  titles:               string;
  userDailyPresent:     number;
}

/* ------------------- 演员照片 ------------------ */
interface CelebrityPhoto {
  approve: number;
  id:      number;
  olink:   string;
  tlink:   string;
  type:    number;
}

export interface PhotosRequest {}

export interface PhotosData {
  proJumpUrl: string;
  size:       number;
  photos:     CelebrityPhoto[];
}

/* ------------------- 演员表演 ------------------ */
export interface PerformanceRequest {}

export interface WorksPerformanceItem {
  mbox:           number;
  mboxValue?:     string;
  mboxValueUnit?: string;
  role:           number;
  roleDesc:       string;
  bottomDesc?:    string;
  url?:           string;
  workValue?:     string;
  workValueUnit?: string;
}

export interface PerformanceItem {
  type:              number;
  worksPerformances: WorksPerformanceItem[];
}

/* ------------------- 演员关系 ------------------ */
export interface RelationshipRequest {

}

export interface RelationItem {
  avatar:   string;
  id:       number;
  name:     string;
  relation: string;
}

export interface RelationshipData {
  relations: RelationItem[];
}

/* ------------------- 演员电影 ------------------ */
export interface MoviesRequest {
  limit?: number
}

export interface MoviesData {
  movies:           MovieBaseItem[];
  paging:           Paging;
  showAvatarDetail: boolean;
}

/* ------------------- 演员近期电影 ------------------ */
export interface RecentMoviesRequest {}

export interface RecentMovieItem {
  avatar:          string;
  category:        string;
  comingTitleDesc: string;
  desc:            string;
  dir:             string;
  duty:            string;
  dutyType:        number;
  id:              number;
  mbox:            number;
  mboxValue:       string;
  mboxValueUnit:   string;
  movieStatus:     string;
  name:            string;
  pubDate:         number;
  pubDesc:         string;
  roleList:        number[];
  rt:              Date;
  showst:          number;
  star:            string;
  type:            number;
}

/* ------------------- 演员份量 ------------------ */
export interface QuantityRequest {}

export interface QuantityData {
  boxNum:        number;
  boxRank:       number;
  celebrityId:   number;
  discussNum:    number;
  role:          string;
  wbFollowerNum: number;
  worksNum:      number;
}