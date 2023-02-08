import querystring from "node:querystring";

const CLIENT_ID = process.env.TWITTER_CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";

export default function handler(req, res) {
  const scopes = [];
  const state = ""

  // Proof Key for Code Exchange (PKCE)
  const codeVerifier = "";
  const codeChallenge = ""

  const query = querystring.stringify({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scopes.join(" "),
    redirect_uri: REDIRECT_URI,
    // FIXME: add state, code_challenge, code_challenge_method
  });

  //TODO: set cookie with code_verifier and 

  res.writeHead(302, { Location: `${TWITTER_AUTH_URL}?${query}` });
  res.end();
}
