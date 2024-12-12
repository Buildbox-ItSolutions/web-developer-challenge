import { AccountModel } from "../models/account"



export interface Authentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>
}

export namespace Authentication {
  export type Params = {
    username: string
    password: string
  }

  export type Model = AccountModel
}