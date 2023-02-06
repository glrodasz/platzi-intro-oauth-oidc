# Sign and Verifying

## Signing
1. Explain the `index.js` file with all the endpoints code folded.
2. Unfold `app.post("/token")` go into `signToken` to implement it.

```javascript
export const signToken = (user) => {
  const payload = {
	// TODO: add sub, name, and exp claims
  };

  // TODO: Return signed token
  return null;
};
```
3. Check `users.js` file and implement the payload, also the `exp` claim.
```javascript
+const ONE_MINUTE_IN_MS = 60 * 1000;

export const signToken = (user) => {
  const payload = {
	+sub: user.id,
    +name: user.fullname,
    +exp: Date.now() + ONE_MINUTE_IN_MS,
  };

  return null;
};
```

4. Import the `jwt` library, declare the `SECRET` from env variable and call the sign function.

```javascript
+import jwt from "jsonwebtoken";

+const SECRET = process.env.SECRET;

+const ONE_MINUTE_IN_MS = 60 * 1000;

export const signToken = (user) => {
  const payload = {
	sub: user.id,
    name: user.fullname,
    exp: Date.now() + ONE_MINUTE_IN_MS,
  };

  +return jwt.sign(payload, SECRET);
};
```
5. Go to postman and make a request: **POST "/token"**
6. Make a request: **GET "/private"**, you should get an error `verifyToken` is not implemented.

## Verifying
1. Unfold `app.post("/private")` go into `verifyToken` to implement it.
```javascript
export const verifyToken = (token) => {
  // TODO: Return verified payload
  return null;
};
```
2. Call the `jwt` verify function.
```javascript
export const verifyToken = (token) => {
  // TODO: Return verified payload
  return jwt.verify(token, SECRET);
};
```
3. Make a request: **GET "/private"**, you should get *Token expired* error.
4. Make a request: **POST "/token"** and **GET "/private"**.

#### Using Asymetric signing
5. Run the script `./keypair.sh` and open it.
>Highlight that whatever script you use the keys needs to be https://en.wikipedia.org/wiki/PKCS_8 in PEM encoded.
6. Fill the `.env` variables
```bash
PRIVATE_KEY_PATH=private.pem
PUBLIC_KEY_PATH=public.pem
```
7. Implement the async signing
```javascript
+const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;

export const signToken = (user) => {
  const payload = {/* (...) */};

  +if (PRIVATE_KEY_PATH) {
  +  const privateKey = fs.readFileSync(PRIVATE_KEY_PATH);
  +  return jwt.sign(payload, privateKey, { algorithm: "RS256" });
  +}

  return jwt.sign(payload, SECRET);
};
```

8. Implement the async verification
```javascript
const PUBLIC_KEY_PATH = process.env.PUBLIC_KEY_PATH;

export const verifyToken = (token) => {
  +if (PUBLIC_KEY_PATH) {
  +  const publicKey = fs.readFileSync(PUBLIC_KEY_PATH);
  +  return jwt.verify(token, publicKey);
  +}

  return jwt.verify(token, SECRET);
};

```
9. Make a request: **POST "/token"** and **GET "/private"**.