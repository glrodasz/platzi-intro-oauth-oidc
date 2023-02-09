import { randomString } from "./randomString";

export const obtainSession = (key) => {
  const value = sessionStorage.getItem(key);

  if (value) {
    return value;
  }

  const newValue = randomString.generate(16);
  sessionStorage.setItem(key, newValue);

  return newValue;
};
