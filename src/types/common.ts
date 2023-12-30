/**  经纬度 */
export interface MaoYanLocation {
  lng: number // 经度
  lat: number // 纬度
}

/** */
export enum MovieColor {
  F03D37 = "#F03D37",
  The3C9Fe6 = "#3C9FE6",
}

/** */
export enum MovieContent {
  BuyTickets = "购票",
  PrevSale = "预售",
}

/** */
export interface ShowStateButton {
  color:       MovieColor; //
  content:     MovieContent; //
  onlyPreShow: boolean; //
}
