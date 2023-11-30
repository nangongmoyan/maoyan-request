import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!

/** 回复相关的api */
export const replyApi = {
  /**
   * 回复列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  replies: async(vo: Reply.Replies.Request): Promise<RequestBase.MaoYanResponse<ReplyBase.ReplyBaseItem[]>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<ReplyBase.ReplyBaseItem[]>>(apiRequest<Reply.Replies.Request, ReplyBase.ReplyBaseItem[]>({
      vo,
      url: pathMap.replyApi.replies(),
      key: createRequestKey('replyApi', 'replies'),
    }).then(rlt => rlt ?? {}))
  },
}