import { pathMap } from "../../config"
import instanceMap from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!
/** 评论相关的api */
export const commentApi = {

  /**
   * 评论标签
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  hotTag: async(vo: Comment.HotTag.Request): Promise<Comment.HotTag.Data> => {
    return mapYanTryCatch<Comment.HotTag.Data>(apiRequest<Comment.HotTag.Request, Comment.HotTag.Data>({
      vo,
      url: pathMap.commentApi.hotTag(),
      key: createRequestKey('commentApi', 'hotTag'),
    }).then(rlt => rlt.data ?? {}))
  },

  /**
   * 标签和主题
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  tagAndTopic: async(vo: Comment.TagAndTopic.Request): Promise<Comment.TagAndTopic.TagAndTopicItem[]> => {
    return mapYanTryCatch<Comment.TagAndTopic.TagAndTopicItem[]>(apiRequest<Comment.TagAndTopic.Request, Comment.TagAndTopic.TagAndTopicItem[]>({
      vo,
      url: pathMap.commentApi.tagAndTopic(),
      key: createRequestKey('commentApi', 'tagAndTopic'),
    }).then(rlt => rlt.data ?? []))
  },

  /**
   * 评论列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  comments: async(vo: Comment.Comments.Request): Promise<RequestBase.MaoYanResponse<Comment.Comments.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Comment.Comments.Data>>(apiRequest<Comment.Comments.Request, Comment.Comments.Data>({
      vo,
      url: pathMap.commentApi.comments(),
      key: createRequestKey('commentApi', 'comments'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 热议话题
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  hotTopic: async(vo: Comment.HotTopic.Request): Promise<Comment.HotTopic.Data> => {
    return mapYanTryCatch<Comment.HotTopic.Data>(apiRequest<Comment.HotTopic.Request, Comment.HotTopic.Data>({
      vo,
      url: pathMap.commentApi.hotTopic(),
      key: createRequestKey('commentApi', 'hotTopic'),
    }).then(rlt => rlt.data ?? {}))
  },

  /**
   * 评论详情
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  information: async(vo: Comment.Information.Request): Promise<CommentBase.CommentItem> => {
    return mapYanTryCatch<CommentBase.CommentItem>(apiRequest<Comment.Information.Request, CommentBase.CommentItem>({
      vo,
      url: pathMap.commentApi.information(),
      key: createRequestKey('commentApi', 'information'),
    }).then(rlt => rlt.data ?? {}))
  },
}