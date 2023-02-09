import { ConnectButton } from "@/components/ConnectButton";
import { MainContainer } from "@/components/MainContainer";
import { Card } from "@/components/Card";

export default function Home() {
  const { data, status } = null

  return status === "authenticated" ? (
    <MainContainer>
      <Card userProfile={data?.user} />
    </MainContainer>
  ) : (
    <MainContainer>
      <ConnectButton onClick={() => {}}>
        Login with GitHub
      </ConnectButton>
    </MainContainer>
  );
}
