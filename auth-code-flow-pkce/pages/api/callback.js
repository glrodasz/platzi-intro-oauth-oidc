const TWITTER_TOKEN_URL = "https://api.twitter.com/2/oauth2/token";

export default async function handler(req, res) {
  const options = {};

  try {
    const response = await fetch(TWITTER_TOKEN_URL, options);
    const data = await response.json();

    res.writeHead(302, { Location: "/home" });
    res.end();
  } catch (error) {
    console.error(error);
  }
}
