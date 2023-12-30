/* -------------------  ------------------ */
export interface DetailRequest {
  positionIds: string
  clientType: 'wechat_small_program'
}

export interface DetailConfig {
  adId:         number;
  adImgColor:   string;
  frame:        number;
  image:        string;
  link:         string;
  materialId:   number;
  materialType: number;
  showAdLabel:  number;
  type:         number;
}

export interface DetailItem {
  config:       DetailConfig[];
  positionId:   number;
  positionName: string;
  type:         number;
}