export interface HallTypeVOList {
  name: string;
  url:  string;
}

export interface CinemaTag {
  allowRefund:    number;
  buyout:         number;
  cityCardTag:    number;
  deal:           number;
  endorse:        number;
  giftTag:        string;
  hallType:       string[];
  hallTypeVOList: HallTypeVOList[];
  sell:           number;
  snack:          number;
  vipTag:         string;
}

export interface Promotion {
  cardPromotionTag:    string;
  couponPromotionTag:  string;
  merchantActivityTag: string;
  packShowActivityTag: string;
  platformActivityTag: string;
  starActivityTag:     string;
}

export interface CinemaBaseItem {
  id:        number;
  mark:      number;
  nm:        string;
  sellPrice: string;
  addr:      string;
  distance:  string;
  tag:       CinemaTag;
  promotion: Promotion;
  showTimes: string;
}