import axios, { AxiosResponse } from "axios";
import { HttpClient, HttpResponse, HttpRequest } from "@/app/data/protocols/http/http-client";

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
    } catch (error) {
      return (error as any).response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}