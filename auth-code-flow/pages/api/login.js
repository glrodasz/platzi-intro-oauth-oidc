import querystring from "node:querystring";
const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";

export default function handler(req, res) {
  const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
  ];

  const query = querystring.stringify({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scopes.join(" "),
    redirect_uri: process.env.REDIRECT_URI,
  });

  res.writeHead(302, { Location: `${SPOTIFY_AUTH_URL}?${query}` });
  res.end();
}
