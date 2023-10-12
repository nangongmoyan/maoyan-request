import { apiRequest } from "../../core"

export const filmApi = {

  /**
   * 
   * @param vo 
   * @returns 
   */
  getHotFilm: async(vo: Film.Hot.Request)=>{
    const rlt = await apiRequest.get('', {
      params: vo
    })

    return rlt
  }
}