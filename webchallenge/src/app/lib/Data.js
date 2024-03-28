import { connectToDb } from "./Connect";
import { WebChallenge } from "./Models";

export const GetPosts = async () => {
  connectToDb();
  const posts = WebChallenge.find();

  return posts;
};
