
const TWITTER_AUTH_URL = "https://twitter.com/i/oauth2/authorize";

export default function handler(req, res) {
  const scopes = [];

  const query = ""

  res.writeHead(302, { Location: `${TWITTER_AUTH_URL}?${query}` });
  res.end();
}
