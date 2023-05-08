import axios from "axios";

const apiHost = "http://localhost:5051";
const configuration = {
  baseURL: `${apiHost}/v1`,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "aplication/json",
  },
};

const axiosInstance = axios.create(configuration);

export interface ApiResult<T> {
  data: T | null;
  error: any | null;
}

export default new (class Api {
  public async get<T>(url: string, params?: any): Promise<ApiResult<T>> {
    try {
      const { data } = await axiosInstance.get(url, { params });
      return {
        data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error,
      };
    }
  }
})();
