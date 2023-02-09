import dynamic from "next/dynamic";
import cookie from "cookie";

import { MainContainer } from "@/components/MainContainer";
import { Card } from "@/components/Card";

export async function getServerSideProps({ req }) {
  const data = cookie.parse(req.headers.cookie);
  return { props: { accessToken: data?.access_token } };
}

export default function Home({ accessToken }) {
  return (
    <MainContainer>
      <Card accessToken={accessToken} />
    </MainContainer>
  );
}
