import { useSession } from "./useSession";

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_API_AUDIENCE = import.meta.env.VITE_AUTH0_API_AUDIENCE;
const AUTH0_AUTH_URL = `https://${AUTH0_DOMAIN}/authorize`;

const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const useAuthUrl = () => {
  const scopes = ["openid", "email", "read:sample"];

  const state = useSession("state");
  const nonce = useSession("nonce", true);

  const parameters = {
    response_type: "id_token token",
    response_mode: "form_post",
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: scopes.join(" "),
    audience: AUTH0_API_AUDIENCE,
    state,
    nonce
  };

  const queryParams = new URLSearchParams(parameters);
  return `${AUTH0_AUTH_URL}?${queryParams}`;
};
