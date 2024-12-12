import { LocalStorageAdapter } from "./local-storage-adapter";
import * as faker from "faker";
import "jest-localstorage-mock";

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter();

describe("LocalStorageAdapter", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("Should call localStorage.setItem with correct values", async () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.random.objectElement<{}>();
    sut.set(key, value);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it("Should call localStorage.removeItem if value is null", async () => {
    const sut = makeSut();
    const key = faker.database.column();
    sut.set(key, undefined as any);
    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
  });
});
