import { apiRequest } from "../../core"

export const filmApi = {

  /**
   * 
   * @param vo 
   * @returns 
   */
  getHotFilm: async(vo: Film.Hot.Request)=>{
    const rlt = await apiRequest.get('/mmdb/movie/v4/list/hot.json', {
      params: vo
    })
    console.log({rlt})
    return rlt
  },

  /**
   * 即将上映
   * @param vo 
   * @returns 
   */
  comingSoonFilm: async(vo: Film.ComingSoon.Request) => {
    const rlt = await apiRequest.get('/mmdb/movie/home/list/rt/order/coming.json', {
      params: vo
    })

    return rlt
  }
}