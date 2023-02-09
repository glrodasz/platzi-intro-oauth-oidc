// Load environment variables
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import express from "express";
import ViteExpress from "vite-express";

import { validateTokenWithJwks } from "./src/utils/validateTokenJwks.js";

// Initialize Express
const app = express();

// Parse the body of the request (x-www-form-urlencoded)
app.use(express.urlencoded());

// Declare PORT from env variable
const PORT = process.env.PORT;
const JWKS_URI = `https://${process.env.VITE_AUTH0_DOMAIN}/.well-known/jwks.json`;

// Handle the callback route
app.post("/callback", async (req, res) => {
  const { access_token, id_token, state } = req.body;

  // Validate the id_token and get the nonce
  const { nonce } = await validateTokenWithJwks(id_token, JWKS_URI);

  const parameters = {
    access_token,
    id_token,
    state,
    nonce
  };

  const query = new URLSearchParams(parameters);

  res.writeHead(302, { Location: `/callback#${query}` });
  res.end();
});

// Start the server
ViteExpress.listen(app, PORT, () =>
  console.info(`🌐 Listening on http://localhost:${PORT}`)
);
