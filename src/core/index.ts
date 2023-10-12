// import { config } from "../config";
// import request, { extend, ResponseError } from 'umi-request'
// import * as middlewares from '../utils/middlewares'

import axios from "axios";
import { config } from "../config";

// request.use(middlewares.globalMiddleware, { global : true})
/** */
// export const  wxRequest = extend({
//   baseURL: config.host.wx
// })

// /** */
// export const  adRequest = axios.create({
//   baseURL: config.host.ad
// })

// /** */
// export const  iwxRequest = axios.create({
//   baseURL: config.host.iwx
// })

/** */
export const  apiRequest = axios.create({
 baseURL: config.host.api
})

// /** */
// export const  monitorRequest = axios.create({
//   baseURL: config.host.monitor
// })

// /** */
// export const  vodMovieRequest = axios.create({
//   baseURL: config.host.vodMovie
// })