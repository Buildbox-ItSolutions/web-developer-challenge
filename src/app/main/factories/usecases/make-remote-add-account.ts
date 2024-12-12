import { RemoteAddAccount } from "@/app/data/usecases/remote-add-account/remote-add-account";
import { AddAccount } from "@/app/domain/usecases/addAccount";
import { makeApiUrl } from "@/app/main/http/api-url-factory";
import { makeAxiosHttpClient } from "@/app/main/http/axios-http-client-factory";

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeApiUrl("/auth/signup"), makeAxiosHttpClient());
