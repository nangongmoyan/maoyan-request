
class MaoYan {
  /** 环境 */
  env: Env
  /** uuid */
  uuid: string
  /** 城市id */
  cityId: string
  /** 超时时间 */
  timeout: number
  /** 渠道id */
  channelId: string
  /** config */

  constructor(){
    this.cityId = '30';
    this.env = 'release';
    this.timeout = 20 * 1000;
    this.channelId = '70001';
    this.uuid = crypto.randomUUID()
  }

  setenv(value: Env){
    this.env = value
    return this
  }
  setUuid(id: string){
    this.uuid = id
    return this
  }

  setCityId (id: string){
    this.cityId = id
    return this
  }

  setTimeOut (timeout: number){
    this.timeout = timeout
    return this
  }

  setChannelId (id: string){
    this.channelId = id
    return this
  }


}


const maoYan = new MaoYan()

console.log({maoYan})
export { maoYan }