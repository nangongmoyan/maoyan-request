import { pathMap } from "../../config";
import { instanceMap } from "../../instance";
import { createRequestKey, mapYanTryCatch } from "../../utils/request";
import { LoginInSmsStep1Data, LoginInSmsStep1Request } from "./types";

const passportRequest = instanceMap.get('passport')?.request!

/** 登录授权相关的api */
export const authApi = {
  loginInSmsStep1: async(vo: LoginInSmsStep1Request): Promise<LoginInSmsStep1Data> => {
    return mapYanTryCatch<LoginInSmsStep1Data>(passportRequest<LoginInSmsStep1Request, LoginInSmsStep1Data>({
      vo,
      method:'POST',
      url: pathMap.passport.loginInSmsStep1(),
      key: createRequestKey('authApi', 'loginInSmsStep1'),
    }).then(rlt => rlt))
  },
}