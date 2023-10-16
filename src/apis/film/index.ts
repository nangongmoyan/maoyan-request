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
  }
}