import { Card } from "@/components/Card";
import { MainContainer } from "@/components/MainContainer";
import { useFetch } from "@/hooks/useFetch";

const TWITTER_ME_ENDPOINT =
  "/api/cors?url=https://api.twitter.com/2/users/me?user.fields=profile_image_url";
const TWITTER_TWEETS_ENDPOINT = (userId) =>
  userId
    ? `/api/cors?url=https://api.twitter.com/2/users/${userId}/tweets`
    : null;

export default function Home() {
  const { response: userProfile } = useFetch(TWITTER_ME_ENDPOINT);

  const tweetsUrl = TWITTER_TWEETS_ENDPOINT(userProfile?.data?.id);
  const { response: userTweets } = useFetch(tweetsUrl);

  return (
    <MainContainer>
      <Card userTweets={userTweets?.data} userProfile={userProfile?.data} />
    </MainContainer>
  );
}
