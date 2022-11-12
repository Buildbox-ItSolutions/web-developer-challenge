import * as faker from "faker";
import { Authentication } from "@/app/domain/usecases/authentication";
import { mockAccountModel } from "@/app/domain/__mocks__/mock-account";

export const mockAuthenticationParams = (): Authentication.Params => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
});

export const mockAuthenticationModel = (): Authentication.Model =>
  mockAccountModel();
