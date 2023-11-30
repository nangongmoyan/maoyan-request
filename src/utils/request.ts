import { MAOYAN_ERROR } from "../const/error"
import { MaoYanError } from "../maoYanError"

/**
 * 封装trycatch
 * @param promise 
 * @returns 
 */
export function mapYanTryCatch<T>( promise: Promise<T> | T) {
  try {
    return promise
  } catch (error) {
    throw error
  }
}

/**
 * 生成请求key
 * @param apiName 
 * @param childName 
 * @returns 
 */
export function createRequestKey (apiName: ApiName, childName: string){
  return `${apiName} - ${childName}`
}

/**
 * 生成MaoYanError
 * @param error 
 * @returns 
 */
export function createMaoYanError (error: RequestBase.MaoYanErrorProps){
  return new MaoYanError(error)
}

/**
 *  生成Error信息
 * @param code 
 * @param key 
 * @param otherMsg 
 * @returns `This error occurs in ${key} : ${otherMsg}`
 */
export function createErrorInformation(code: number , key: string , otherMsg: string){
  return {
    code, 
    msg: `This error occurs in ${key} : ${otherMsg}`
  }
}



export function prevHandleRequestReject<T>(config: RequestBase.RequestConfig<T> & {key: string}, reject: (reason?: any) => void){
  const  { invalidurl } = MAOYAN_ERROR
  if(!config.url){
    reject(createMaoYanError(createErrorInformation(invalidurl.code, config.key,  invalidurl.msg)))
  }
}