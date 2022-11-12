import * as faker from "faker";
import { RemoteAddAccount } from "@/app/data/usecases/remote-add-account/remote-add-account";
import { AccountModel } from "@/app/domain/models/account";
import { mockAccountModel } from "@/app/domain/__mocks__/mock-account";

export const mockAddAccountParams = (): RemoteAddAccount.Param => ({
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
});

export const mockAddAccountModel = (): AccountModel => mockAccountModel();
