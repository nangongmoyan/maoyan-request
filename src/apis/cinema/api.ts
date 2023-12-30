import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { CinemaDetailData, CinemaDetailRequest, FilterCinemasData, FilterCinemasRequest, MoreCinemasData, MoreCinemasRequest, ShowData, ShowRequest } from "./types"

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
  filterCinemas: async(vo: FilterCinemasRequest): Promise<FilterCinemasData> =>{
    return mapYanTryCatch<FilterCinemasData>(iRequest?.<FilterCinemasRequest, FilterCinemasData>({
      vo,
      suffix: '',
      url: pathMap.cinemaApi.filterCinemas(),
      key: createRequestKey('cinemaApi', 'filterCinemas'),
    }).then(rlt => (rlt ?? {}) as unknown as  FilterCinemasData))
  },

  /**
   * 影院列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  moreCinemas: async(vo: MoreCinemasRequest): Promise<MaoYanResponse<MoreCinemasData>> =>{
    return mapYanTryCatch<MaoYanResponse<MoreCinemasData>>(iRequest?.<MoreCinemasRequest, MoreCinemasData>({
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
  show: async(vo: ShowRequest): Promise<MaoYanResponse<ShowData>> =>{
    return mapYanTryCatch<MaoYanResponse<ShowData>>(mRequest?.<ShowRequest, ShowData>({
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
  detail: async(vo: CinemaDetailRequest): Promise<MaoYanResponse<CinemaDetailData>> =>{
    return mapYanTryCatch<MaoYanResponse<CinemaDetailData>>(mRequest?.<CinemaDetailRequest, CinemaDetailData>({
      vo,
      url: pathMap.cinemaApi.detail(),
      key: createRequestKey('cinemaApi', 'detail'),
    }).then(rlt => rlt ?? {}))
  },
}