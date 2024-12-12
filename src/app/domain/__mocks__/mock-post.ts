import { RemoteAddPost } from "@/app/data/usecases/remote-add-post/remote-add-post";
import { Post } from "@/app/interfaces/post.interface";
import * as faker from "faker";

export const mockPost = (): Post => ({
  message: faker.datatype.string(),
  name: faker.datatype.string(),
  urlx: faker.internet.avatar(),
  id: faker.datatype.uuid(),
});

export const mockSavePostParams = (): RemoteAddPost.Params => ({
  message: faker.datatype.string(),
  name: faker.datatype.string(),
  urlx: faker.internet.avatar(),
});

export const mockRemoteAddPostModel = (): RemoteAddPost.Model => ({
  message: faker.datatype.string(),
  name: faker.datatype.string(),
  urlx: faker.internet.avatar(),
});
