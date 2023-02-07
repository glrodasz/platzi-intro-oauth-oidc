import { Card } from "@/components/Card";
import { MainContainer } from "@/components/MainContainer";
import { useFetch } from "@/hooks/useFetch";

export default function Home() {
  // const { response: userProfile, error } = useFetch(
  //   "/api/cors?url=https://api.twitter.com/2/users/me?user.fields=profile_image_url"
  // );

  // const tweetsUrl = userProfile
  //   ? `/api/cors?url=https://api.twitter.com/2/users/${userProfile?.data?.id}/tweets`
  //   : null;
  // const { response: userTweets } = useFetch(tweetsUrl);

  return (
    <MainContainer>
      <Card userTweets={userTweets?.data} userProfile={userProfile?.data} />
    </MainContainer>
  );
}
