/**
 * 处理path
 * @param path 
 * @param values 
 * @returns 
 */
export function convertPath (path: string, values: string[] = []) {
  /**如果参数存在非法值，直接返回undefined */
  if(values?.some(v=> !v)) return undefined
  return path
}