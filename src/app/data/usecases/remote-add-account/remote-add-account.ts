import { UnexpectedError } from "@/app/domain/errors/unexpected-error";
import { UserAlreadyExistsError } from "@/app/domain/errors/user-already-exists-error";
import { AddAccount } from "@/app/domain/usecases/addAccount";

import {
  HttpClient,
  HttpStatusCode,
} from "@/app/data/protocols/http/http-client";
export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddAccount.Model>
  ) {}

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body as AddAccount.Model;
      case HttpStatusCode.badRequest:
        throw new UserAlreadyExistsError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model;
  export type Param = AddAccount.Params;
}
