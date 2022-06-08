const TrimString = (str: string) => str.trim();

const IsStringAlphaNumeric = (str: string) => /^[A-Za-z0-9 ]+$/.test(str);

const IsTextValid = (str: string) => /^[A-Za-z0-9 .,]+$/.test(str);

export { TrimString, IsStringAlphaNumeric, IsTextValid };
