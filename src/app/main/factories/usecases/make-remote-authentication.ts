import { RemoteAuthentication } from "@/app/data/usecases/remote-authentication/remote-authentication";
import { Authentication } from "@/app/domain/usecases/authentication";
import { makeApiUrl } from "@/app/main/http/api-url-factory";
import { makeAxiosHttpClient } from "@/app/main/http/axios-http-client-factory";

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl("/auth/login"), makeAxiosHttpClient());
