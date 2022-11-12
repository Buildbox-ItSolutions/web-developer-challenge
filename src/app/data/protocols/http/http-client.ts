export type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export type HttpRequest = {
  url: string 
  method: HttpMethod
  body?: any 
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: number
  body?: T
} 

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500
}

export interface HttpClient<R = any> {
  request(data: HttpRequest): Promise<HttpResponse<R>>
}