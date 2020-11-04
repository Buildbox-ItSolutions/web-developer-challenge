import { PostI } from "../types/Post";

export function storePost(payload: PostI) {
  return { type: "STORE_POST", payload };
}

export function indexPost(payload?: any) {
  return { type: "INDEX_POST", payload };
}

export function deletePost(payload: number) {
  return { type: "DELETE_POST", payload };
}
