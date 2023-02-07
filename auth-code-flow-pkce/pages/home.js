import { Card } from "@/components/Card";
import { MainContainer } from "@/components/MainContainer";

const TWITTER_ME_ENDPOINT =
  "https://api.twitter.com/2/users/me?user.fields=profile_image_url";
const TWITTER_TWEETS_ENDPOINT = (userId) =>
  userId ? `https://api.twitter.com/2/users/${userId}/tweets` : null;

export default function Home() {
  return (
    <MainContainer>
      <Card userTweets={userTweets?.data} userProfile={userProfile?.data} />
    </MainContainer>
  );
}
