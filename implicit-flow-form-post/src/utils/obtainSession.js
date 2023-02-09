import { randomString } from "./randomString";

export const obtainSession = (key, isCryptographically) => {
  const value = sessionStorage.getItem(key);

  if (value) {
    return value;
  }

  const newValue = isCryptographically
    ? randomString.generateCrypto(16)
    : randomString.generate(16);

  sessionStorage.setItem(key, newValue);

  return newValue;
};
