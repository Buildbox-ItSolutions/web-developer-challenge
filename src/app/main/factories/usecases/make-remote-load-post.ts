import { RemoteLoadPosts } from "@/app/data/usecases/remote-load-post/remote-load-post";
import { LoadPosts } from "@/app/domain/usecases/loadPostList";
import { makeApiUrl } from "@/app/main/http/api-url-factory";
import { makeAxiosHttpClient } from "@/app/main/http/axios-http-client-factory";

export const makeRemoteLoadPosts = (): LoadPosts =>
  new RemoteLoadPosts(makeApiUrl("/posts/"), makeAxiosHttpClient());
