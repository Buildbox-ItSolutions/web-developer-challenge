import { UnexpectedError, FailInToSave } from "@/app/domain/errors";
import { AddPost } from "@/app/domain/usecases/addPost";
import { HttpClient, HttpStatusCode } from "@/app/data/protocols/http";

export class RemoteAddPost implements AddPost {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddPost.Model>
  ) {}

  async add(params: AddPost.Params): Promise<AddPost.Model> {
    console.log("params dentro", params);

    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("ADDPOST return", httpResponse.body);
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body as AddPost.Model;
      case HttpStatusCode.badRequest:
        throw new FailInToSave("Post");
      default:
        throw new UnexpectedError();
    }
  }
}
export namespace RemoteAddPost {
  export type Params = AddPost.Params;
  export type Model = AddPost.Model;
}
