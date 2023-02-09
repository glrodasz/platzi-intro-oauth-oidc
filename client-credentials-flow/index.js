import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import querystring from "node:querystring";
import { fetchWithToken } from "./utils/fetchWithToken.js";

const app = express();

const PORT = process.env.PORT;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;

const DISCORD_TOKEN_URL = "https://discord.com/api/oauth2/token";
const DISCORD_USER_URL = "https://discord.com/api/users/@me";
const DISCORD_GUILDS_URL = "https://discord.com/api/users/@me/guilds";

app.get("/", async (req, res) => {
  const scopes = ["identify", "guilds"];

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      scope: scopes.join(" "),
      client_secret: CLIENT_SECRET,
    }),
  };

  try {
    const response = await fetch(DISCORD_TOKEN_URL, options);
    const { access_token: accessToken } = await response.json();

    const userData = await fetchWithToken(DISCORD_USER_URL, accessToken);
    const guildData = await fetchWithToken(DISCORD_GUILDS_URL, accessToken);

    res.status(200).json({
      user: {
        username: `${userData.username}#${userData.discriminator}`,
        avatar: userData.avatar,
      },
      guilds: guildData.map((guild) => guild.name),
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () =>
  console.info(`🌐 Listening on http://localhost:${PORT}`)
);
