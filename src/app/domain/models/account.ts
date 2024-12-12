import { UserModel } from "./user";

export type AccountModel = {
  user: UserModel
  token: string
}