interface Config { 
  /** 域名相关的 */
  host: {
    [key in Server]: string
  }
}

export const config: Config  = {
  host :{
    wx: 'https://wx.maoyan.com',
    ad: 'https://ad.maoyan.com',
    iwx: 'https://iwx.maoyan.com',
    api: 'https://api.maoyan.com',
    monitor: 'https://monitor.maoyan.com',
    vodMovie: 'https://vod-movie.maoyan.com',
  }
}