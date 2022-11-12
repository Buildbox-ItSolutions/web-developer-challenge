import * as faker from "faker";
import { AccountModel, UserModel } from "@/app/domain/models/index";

export const mockUserModel = (): UserModel => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  PostIds: faker.random.arrayElements(["2", "21", "43"]),
});

export const mockAccountModel = (): AccountModel => ({
  token: faker.datatype.uuid(),
  user: mockUserModel(),
});
