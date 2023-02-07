import { Card } from "@/components/Card";
import { MainContainer } from "@/components/MainContainer";

const SPOTIFY_ME_ENDPOINT = "https://api.spotify.com/v1/me";
const SPOTIFY_PLAYLISTS_ENDPOINT = (userId) =>
  userId ? `https://api.spotify.com/v1/users/${userId}/playlists` : null;

export async function getServerSideProps({ req }) {
  return { props: { accessToken: "" } };
}

export default function Home({ accessToken }) {
  return (
    <MainContainer>
      <Card userPlaylists={null} userProfile={null} />
    </MainContainer>
  );
}
