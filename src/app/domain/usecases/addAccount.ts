import { AccountModel } from "../models";



export interface AddAccount {
  add(params: AddAccount.Params): Promise<AddAccount.Model>
}

export namespace AddAccount {
  export type Params = {
    username: string;
    email?: string;
    password?: string;
  } 

  export type Model = AccountModel
}