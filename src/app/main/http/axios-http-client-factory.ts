import { AxiosHttpClient } from "@/app/infra/http/axios-http-client";

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()
