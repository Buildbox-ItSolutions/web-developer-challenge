const nameValidator = (name: string): boolean => {
  if (name.length >= 3) {
    return true;
  }
  return false;
};

const messageValidator = (message: string): boolean => {
  if (message.length >= 5) {
    return true;
  }
  return false;
};

export const postCardFormValidator = (name: string, message: string) => {
  const isName = nameValidator(name);
  const isMessage = messageValidator(message);
  return [isName, isMessage, !isName || !isMessage];
};

export const validatorInitialState = { name: false, message: false };
