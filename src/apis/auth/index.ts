// import { pathMap } from "../../config";
// import instanceMap from "../../instance";
// import { createRequestKey, mapYanTryCatch } from "../../utils/request";

// const passportRequest = instanceMap.get('passport')?.request!

// /** 登录授权相关的api */
// export const authApi = {
//   loginInSmsStep1: async(vo: MaoYanAuth.LoginInSmsStep1.Request): Promise<MaoYanAuth.LoginInSmsStep1.Data> => {
//     return mapYanTryCatch<MaoYanAuth.LoginInSmsStep1.Data>(passportRequest<MaoYanAuth.LoginInSmsStep1.Request, MaoYanAuth.LoginInSmsStep1.Data>({
//       vo,
//       method:'POST',
//       url: pathMap.passport.loginInSmsStep1(),
//       key: createRequestKey('authApi', 'loginInSmsStep1'),
//     }).then(rlt => rlt))
//   },
// }