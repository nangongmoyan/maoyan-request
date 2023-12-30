import { MovieDealChannel } from "../../types";

/* ------------------- 猫眼放映厅 ------------------ */
export interface OnlineMoviesRequest {}

export interface IconVO {
  iconValue: number;
  iconText:  string;
}

export interface OnlineMovieListItem {
  movieId:       number;
  img:           string;
  score:         number;
  scoreLabel:    string;
  time:          number;
  title:         string;
  desc?:         string;
  preSellStatus: number;
  viewCount:     number;
  dealChannel:   MovieDealChannel;
  url:           string;
  iconVO?:       IconVO;
}

export interface OnlineMoviesData {
  title:           string;
  onlineMovieList: OnlineMovieListItem[];
  total:           number;
  isButtonStyle:   boolean;
  isIosShow:       number;
  isAndroidShow:   number;
  schemaUrl:       string;
}