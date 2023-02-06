// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();

export const signToken = (user) => {
  const payload = {
    // TODO: add sub, name, and exp claims
  };

  // TODO: Return signed token
  return null;
};

export const verifyToken = (token) => {
  return null;
};

export const validateExpiration = (payload) => {
  if (Date.now() > payload.exp) {
    throw new Error("Token expired");
  }
};
