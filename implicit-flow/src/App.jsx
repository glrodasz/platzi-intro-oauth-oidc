import { useState, useEffect } from "react";

import { ConnectButton } from "./components/ConnectButton";
import { MainContainer } from "./components/MainContainer";
import { Card } from "./components/Card";

import { useAuthUrl } from "./hooks/useAuthUrl";
import { useFetch } from "./hooks/useFetch";

import { getHashParams } from "./utils/getHashParams";
import { cleanUrlHash } from "./utils/cleanUrlHash";

const TWITCH_USERS_URL = "https://api.twitch.tv/helix/users";
const TWITCH_CHANNELS_URL = (userId) =>
  userId
    ? `https://api.twitch.tv/helix/channels/followed?user_id=${userId}`
    : null;

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const authUrl = useAuthUrl();

  useEffect(() => {
    const queryAccessToken = getHashParams("access_token");
 
    const queryState = getHashParams("state");
    const sessionState = sessionStorage.getItem("state");

    if (queryState !== sessionState && queryAccessToken) {
      console.error(new Error("ERROR_STATE_MISMATCH"));
      cleanUrlHash();
      return setAccessToken(null);
    }

    if (queryAccessToken) {
      setAccessToken(queryAccessToken);
      cleanUrlHash();
    }
  }, []);

  const { response: userProfile } = useFetch(TWITCH_USERS_URL, accessToken);

  const userChannelsUrl = TWITCH_CHANNELS_URL(userProfile?.data[0].id);
  const { response: userChannels } = useFetch(userChannelsUrl, accessToken);

  return userProfile ? (
    <MainContainer>
      <Card
        userProfile={userProfile?.data[0]}
        userChannels={userChannels?.data}
      />
    </MainContainer>
  ) : (
    <MainContainer>
      <ConnectButton href={authUrl}>Connect to Twitch</ConnectButton>
    </MainContainer>
  );
}

export default App;
