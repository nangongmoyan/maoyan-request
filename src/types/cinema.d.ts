namespace CinemaBase {

  interface HallTypeVOList {
    name: string;
    url:  string;
  }

  interface Tag {
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

  interface Promotion {
    cardPromotionTag:    string;
    couponPromotionTag:  string;
    merchantActivityTag: string;
    packShowActivityTag: string;
    platformActivityTag: string;
    starActivityTag:     string;
  }

  interface CinemaBaseItem {
    id:        number;
    mark:      number;
    nm:        string;
    sellPrice: string;
    addr:      string;
    distance:  string;
    tag:       Tag;
    promotion: Promotion;
    showTimes: string;
  }
}