import { FeedBaseItem, Paging, UserItem } from "../../types";

/* ------------------- 瀑布流 ------------------ */

interface FeedChannelConfig {
  advertisementId:  number;
  channel:          number;
  channelStyle:     number;
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
}


interface FeedChannelAd {
  adId:       number;
  frame:      number;
  labelShow:  boolean;
  link:       string;
  materialId: number;
  positionId: number;
}

interface FeedChannelEXTInfo {
  owImgHeight: number;
  owTitle:     string;
  owImgWidth:  number;
  owImgUrl:    string;
}


interface FeedChannelObjectItem {
  img:   string;
  label: FeedChannelLabel;
  nm:    string;
}

interface FeedChannelMediaBoard {
  content: string;
  id:      number;
  name:    string;
  objects: FeedChannelObjectItem[];
}

interface FeedChannelLabel {
  number: string;
  text:   string;
}

interface FeedItem extends FeedBaseItem {
  ad?:            FeedChannelAd;
  dataSource:     number;
  eventTracking:  string;
  extInfo?:       FeedChannelEXTInfo;
  // reqTraceId:     ReqTraceID;
  user?:          UserItem;
  addTime?:       number;
  shareCount?:    number;
  mediaBoard?:    FeedChannelMediaBoard;
}

export interface FeedChannelRequest {
  feedChannelId: number // 进料通道id
  offset: number //
  limit: number //
}

export interface FeedChannelData {
  config:    FeedChannelConfig;
  feeds:     FeedItem[];
  paging:    Paging;
  timestamp: number;
}