// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();

// Import Express and utilities
import express from "express";
import { getCredentials, getToken } from "./utils/headers.js";
import { signToken, verifyToken, validateExpiration } from "./utils/token.js";
import { getUser } from "./utils/users.js";

// Initialize Express
const app = express();

// Declare PORT from env variable
const PORT = process.env.PORT

app.get("/public", (req, res) => {
  res.send("I'm public");
});

app.get("/private", (req, res) => {
  try {
    const token = getToken(req);
    const payload = verifyToken(token);

    validateExpiration(payload);

    res.send("I'm private");
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});

app.post("/token", (req, res) => {
  try {
    const { username, password } = getCredentials(req);
    const user = getUser(username, password);
    const token = signToken(user);

    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => console.log(`🌐 Listening on http://localhost:${PORT}`));
