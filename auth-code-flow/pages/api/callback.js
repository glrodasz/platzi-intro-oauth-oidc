const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

export default async function handler(req, res) {
  const options = {};

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, options);
    const data = await response.json();

    res.writeHead(302, { Location: "/home" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
