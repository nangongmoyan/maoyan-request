import { apiRequest } from "../../instance"

/** 电影相关的api */
export const filmApi = {
  /**
   * 正在热映
   * @author nangongmoyan
   * @param vo
   * @returns
   */
  getHotFilm: async(vo: Film.Hot.Request): Promise<Film.BaseInformation.FilmsData> => {
    const rlt = await apiRequest<Film.Hot.Request, Film.BaseInformation.FilmResponeseOne>({
      vo,
      method: 'GET',
      url: '/mmdb/movie/v4/list/hot.json',
    })
    return rlt?.data?.hot ?? []
  },

  /**
   * 即将上映
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  comingSoonFilm: async(vo: Film.ComingSoon.Request): Promise<Film.BaseInformation.FilmsData> => {
    const rlt = await apiRequest<Film.ComingSoon.Request, Film.BaseInformation.FilmResponeseOne>({
      vo,
      method: 'GET',
      url: '/mmdb/movie/home/list/rt/order/coming.json'
    })
    return rlt?.data?.coming ?? []
  },

  /**
   * 待映推荐
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  toBeScreenedFilm: async(vo: Film.ToBeScreened.Request): Promise<Film.BaseInformation.FilmsData> => {
    const rlt = await apiRequest<Film.ToBeScreened.Request, Film.BaseInformation.FilmResponeseOne>({
      vo,
      method: 'GET',
      url: '/mmdb/movie/v1/list/wish/order/coming.json'
    })
    return rlt?.data?.coming ?? []
  }
}
