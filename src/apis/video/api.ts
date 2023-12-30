import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { OnlineMoviesData, OnlineMoviesRequest } from "./types"

const vodMovieRequest = instanceMap.get('vodMovie')?.request!

/** 视频相关的api */
export const videoApi = {
  /**
   * 猫眼放映厅
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  onlineMovies: async(vo: OnlineMoviesRequest): Promise<MaoYanResponse<OnlineMoviesData>> => {
    return mapYanTryCatch<MaoYanResponse<OnlineMoviesData>>(vodMovieRequest<OnlineMoviesRequest, OnlineMoviesData>({
      vo,
      url: pathMap.videoApi.onlineMovies(),
      key: createRequestKey('videoApi', 'onlineMovies'),
    }).then(rlt => rlt ?? {}))
  },
}