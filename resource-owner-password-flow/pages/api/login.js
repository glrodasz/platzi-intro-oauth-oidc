import querystring from "node:querystring";

const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
const AUTH0_API_AUDIENCE = process.env.AUTH0_API_AUDIENCE;
const CLIENT_ID = process.env.AUTH0_CLIENT_ID;
const CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

const AUTH0_TOKEN_URL = `https://${AUTH0_DOMAIN}/oauth/token`;

export default async function handler(req, res) {
  const scopes = [];

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "password",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      scope: scopes.join(" "),
      // FIXME: send audience, username, and password
    }),
  };

  try {
    const response = await fetch(AUTH0_TOKEN_URL, options);
    const data = await response.json();

    res.setHeader(
      "Set-Cookie",
      `access_token=${data.access_token}; Path=/; HttpOnly`
    );

    res.writeHead(302, { Location: "/home" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
