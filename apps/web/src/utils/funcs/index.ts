export const getLocalStorageItem = (item: string) => localStorage.getItem(item);
export const setLocalStorageItem = (item: string, value: string) => () =>
  localStorage.setItem(item, value);
