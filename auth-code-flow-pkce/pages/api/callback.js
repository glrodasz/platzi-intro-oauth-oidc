import querystring from "node:querystring";
import cookie from "cookie";

const CLIENT_ID = process.env.TWITTER_CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

const TWITTER_TOKEN_URL = "https://api.twitter.com/2/oauth2/token";

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie);

  if (/* TODO: Check if state match */) {
    res.writeHead(302, { Location: "/#?error=ERROR_STATE_MISMATCH" });
    res.end();
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      code: req.query.code,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      // FIXME: add code_verifier
    }),
  };

  try {
    const response = await fetch(TWITTER_TOKEN_URL, options);
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
