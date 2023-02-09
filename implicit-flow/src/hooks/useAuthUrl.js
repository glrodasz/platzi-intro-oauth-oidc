import { useSession } from "./useSession";

const TWITCH_AUTH_URL = "https://id.twitch.tv/oauth2/authorize";
const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const useAuthUrl = () => {
  const scopes = ["user:read:email", "user:read:follows"];
  const state = useSession("state")

  const parameters = {
    response_type: "token",
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: scopes.join(" "),
    state
  };

  const queryParams = new URLSearchParams(parameters);
  return `${TWITCH_AUTH_URL}?${queryParams}`;
};
