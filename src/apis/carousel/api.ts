import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { DetailItem, DetailRequest } from "./types"

const adRequest = instanceMap.get('ad')?.request!
/** 轮播相关的api */
export const carouselApi = {
  /**
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  detail: async(vo: DetailRequest): Promise<MaoYanResponse<DetailItem[]>> => {
    return mapYanTryCatch<MaoYanResponse<DetailItem[]>>(adRequest<DetailRequest,DetailItem[]>({
      vo,
      url: pathMap.carouselApi.detail(),
      key: createRequestKey('carouselApi', 'detail'),
    }).then(rlt => rlt ?? {}))
  },
}