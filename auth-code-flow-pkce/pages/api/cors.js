import cookie from "cookie";

export default async function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie);

  try {
    const response = await fetch(req.query.url, {
      method: req.method,
      headers: {
        Authorization: `Bearer ${cookies.access_token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
}
