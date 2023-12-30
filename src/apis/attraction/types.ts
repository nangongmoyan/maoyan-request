
/* ------------------- 密室逃脱 ------------------ */
export interface SightItem {
  posterUrl: string;
  poiName:   string;
  discount:  boolean;
  poiId:     number;
  category:  string;
  jumpUrl:   string;
}

export interface SightsRequest {
  lng: number // 经度
  lat: number // 纬度
}

export interface SightsData {
  sights:    SightItem[];
  title:     string;
  schemaUrl: string;
}