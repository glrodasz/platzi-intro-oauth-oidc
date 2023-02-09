import { generateCodeChallenge } from "@/utils/generateCodeChallenge";
import querystring from "node:querystring";
import randomString from "randomstring";

const CLIENT_ID = process.env.TWITTER_CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";

export default function handler(req, res) {
  const scopes = ["users.read", "tweet.read"];
  const state = randomString.generate(16);

  // Proof Key for Code Exchange (PKCE)
  const codeVerifier = randomString.generate(128);
  const codeChallenge = generateCodeChallenge(codeVerifier)

  const query = querystring.stringify({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scopes.join(" "),
    redirect_uri: REDIRECT_URI,
    state,
    code_challenge: codeChallenge,
    code_challenge_method: "S256"
  });

  res.setHeader("Set-Cookie", [
    `state=${state}; Path=/; HttpOnly`,
    `verifier=${codeVerifier}; Path=/; HttpOnly`
  ]);

  res.writeHead(302, { Location: `${TWITTER_AUTH_URL}?${query}` });
  res.end();
}
