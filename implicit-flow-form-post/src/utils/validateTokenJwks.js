import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";

export const validateTokenWithJwks = (token, jwksUri) => {
  const client = jwksClient({ jwksUri });

  const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  };

  return new Promise((resolve, reject) => {
    jwt.verify(token, getKey, function (err, decoded) {
      if (err) {
        console.error(err);
        reject(err);
      }

      resolve(decoded);
    });
  });
};
