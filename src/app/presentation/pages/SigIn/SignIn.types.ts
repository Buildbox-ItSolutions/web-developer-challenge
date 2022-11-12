import { Authentication } from "@/app/domain/usecases/authentication";
import { LocalStorageAdapter } from "@/app/infra/cache";

export type SignInProps = {
  authentication: Authentication;
  storage: LocalStorageAdapter;
};

export type SignInInputs = {
  username: string;
  password: string;
};
