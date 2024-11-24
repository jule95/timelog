import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private apiService;

  constructor(config?: AxiosRequestConfig) {
    this.apiService = new Axios({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        'Content-Type': `application/json`,
      },
      // ToDO Issue#1: Why is this needed?
      transformRequest: data => JSON.stringify(data),
      transformResponse: data => JSON.parse(data),
      validateStatus: status => status >= 200 && status < 300,
      ...config,
    });
  }

  public async get<TRes>(url: string, config?: AxiosRequestConfig): Promise<TRes> {
    const response = await this.apiService.get<TRes, AxiosResponse<TRes>>(url, config);
    return response.data;
  }

  public async post<TRes, TData>(url: string, data: TData, config?: AxiosRequestConfig): Promise<TRes> {
    const response = await this.apiService.post<TRes, AxiosResponse<TRes>, TData>(url, data, config);
    return response.data;
  }

  public async patch<TRes, TData>(url: string, data: TData, config?: AxiosRequestConfig): Promise<TRes> {
    const response = await this.apiService.patch<TRes, AxiosResponse<TRes>, TData>(url, data, config);
    return response.data;
  }

  public async delete<TRes>(url: string, config?: AxiosRequestConfig): Promise<TRes> {
    const response = await this.apiService.delete<TRes, AxiosResponse<TRes>>(url, config);
    return response.data;
  }
}

export default ApiService;
