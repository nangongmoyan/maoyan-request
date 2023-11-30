import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const iRequest = instanceMap.get('i')?.request!
const mRequest = instanceMap.get('m')?.request!

/** 影院相关的api */
export const cinemaApi = {
  /**
   * 影院筛选条件
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  filterCinemas: async(vo: Cinema.FilterCinemas.Request): Promise<Cinema.FilterCinemas.Data> =>{
    return mapYanTryCatch<Cinema.FilterCinemas.Data>(iRequest?.<Cinema.FilterCinemas.Request, Cinema.FilterCinemas.Data>({
      vo,
      suffix: '',
      url: pathMap.cinemaApi.filterCinemas(),
      key: createRequestKey('cinemaApi', 'filterCinemas'),
    }).then(rlt => (rlt ?? {}) as unknown as  Cinema.FilterCinemas.Data))
  },

  /**
   * 影院列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  moreCinemas: async(vo: Cinema.MoreCinemas.Request): Promise<RequestBase.MaoYanResponse<Cinema.MoreCinemas.Data>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<Cinema.MoreCinemas.Data>>(iRequest?.<Cinema.MoreCinemas.Request, Cinema.MoreCinemas.Data>({
      vo,
      suffix: '',
      cityProperty:'cityId',
      url: pathMap.cinemaApi.moreCinemas(),
      key: createRequestKey('cinemaApi', 'moreCinemas'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  show: async(vo: Cinema.Show.Request): Promise<RequestBase.MaoYanResponse<Cinema.Show.Data>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<Cinema.Show.Data>>(mRequest?.<Cinema.Show.Request, Cinema.Show.Data>({
      vo,
      url: pathMap.cinemaApi.show(),
      key: createRequestKey('cinemaApi', 'show'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 影院详情
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  detail: async(vo: Cinema.Detail.Request): Promise<RequestBase.MaoYanResponse<Cinema.Detail.Data>> =>{
    return mapYanTryCatch<RequestBase.MaoYanResponse<Cinema.Detail.Data>>(mRequest?.<Cinema.Detail.Request, Cinema.Detail.Data>({
      vo,
      url: pathMap.cinemaApi.detail(),
      key: createRequestKey('cinemaApi', 'detail'),
    }).then(rlt => rlt ?? {}))
  },
}