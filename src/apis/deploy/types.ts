/* ------------------- 首页Tab ------------------ */
export interface HomeTabRequest {}

export interface HomeTabItem {
  advertisementId:  number;
  channel?:         number;
  channelStyle:     number;
  hotAndComing?:    number;
  id:               number;
  isDefaultChannel: number;
  isSupportChannel: number;
  name:             string;
  online:           number;
  putIconType:      number;
  rank:             number;
  topicName:        string;
  type:             number;
  visible:          number;
  channelUrl?:      string;
  marketingId?:     string;
  pageType?:        string;
  putIconUpdate?:   string;
}

/* ------------------- 城市数据 ------------------ */
export interface CityRequest {}

export enum Rank {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  S = "S",
  Z = "Z",
}

export interface CityData {
  id:            number;
  nm:            string;
  py:            string;
  rank:          Rank;
  acronym:       string;
  chineseFullnm: string;
  position:      Location;
}