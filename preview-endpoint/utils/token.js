// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET;

const ONE_MINUTE_IN_MS = 60 * 1000;

export const signToken = (user) => {
  const payload = {
    sub: user.id,
    name: user.fullname,
    exp: Date.now() + ONE_MINUTE_IN_MS,
  };

  return jwt.sign(payload, SECRET);
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

export const validateExpiration = (payload) => {
  if (Date.now() > payload.exp) {
    throw new Error("Token expired");
  }
};
