const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";

export default function handler(req, res) {
  const scopes = [];

  const query = "";

  res.writeHead(302, { Location: `${SPOTIFY_AUTH_URL}?${query}` });
  res.end();
}
