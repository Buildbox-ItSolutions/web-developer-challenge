export default class DataContextException {
  private static mustBeUsedWithinDataProviderMessage =
    "useDataContext must be used within DataProvider";

  static mustBeUsedWithinDataProvider() {
    return Error(DataContextException.mustBeUsedWithinDataProviderMessage);
  }
}