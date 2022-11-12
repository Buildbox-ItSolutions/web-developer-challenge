import { AddAccount } from "@/app/domain/usecases/addAccount";
import { LocalStorageAdapter } from "@/app/infra/cache/local-storage-adapter";

export type SignUpProps = {
  addAccount: AddAccount;
  storage: LocalStorageAdapter;
};

export type SignUpInputs = {
  email?: string;
  username: string;
  password: string;
};
