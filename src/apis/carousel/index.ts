import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const adRequest = instanceMap.get('ad')?.request!
/** 轮播相关的api */
export const carouselApi = {
  /**
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  detail: async(vo: Carousel.Detail.Request): Promise<RequestBase.MaoYanResponse<Carousel.Detail.DetailItem[]>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Carousel.Detail.DetailItem[]>>(adRequest<Carousel.Detail.Request, Carousel.Detail.DetailItem[]>({
      vo,
      url: pathMap.carouselApi.detail(),
      key: createRequestKey('carouselApi', 'detail'),
    }).then(rlt => rlt ?? {}))
  },
}