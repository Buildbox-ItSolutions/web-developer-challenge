import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "api.buildbox.itsolutions.test",
});

http.defaults.headers.post["Content-Type"] = "application/json";

http.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  },
  (error: AxiosError) => {
    const {
      response,
      request,
    }: { response?: AxiosResponse; request?: XMLHttpRequest } = error;
    if (response) {
      if (response.status >= 400 && response.status < 500) {
        console.log(response.data?.data?.message, "error");
        return null;
      }
    } else if (request) {
      console.log("Request failed. Please try again.", "error");
      return null;
    }
    return Promise.reject(error);
  }
);

export default http;
