const TrimString = (str: string) => str.trim();

const IsStringAlphaNumeric = (str: string) => /^[\w ]+$/.test(str);

export { TrimString, IsStringAlphaNumeric };
