import { RemoteAddPost } from "@/app/data/usecases/remote-add-post/remote-add-post";
import { AddPost } from "@/app/domain/usecases/addPost";
import { makeApiUrl } from "@/app/main/http/api-url-factory";
import { makeAxiosHttpClient } from "@/app/main/http/axios-http-client-factory";

export const makeRemoteAddPost = (): AddPost =>
  new RemoteAddPost(makeApiUrl("/posts/create"), makeAxiosHttpClient());
