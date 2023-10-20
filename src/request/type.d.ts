import { AxiosResponse, CreateAxiosDefaults, AxiosRequestConfig } from "axios";

export interface CreateRequestConfig<T = AxiosResponse> extends CreateAxiosDefaults {

}
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // interceptors?: RequestInterceptors<T>
}