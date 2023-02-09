import { signIn, useSession } from "next-auth/react";
import { ConnectButton } from "@/components/ConnectButton";
import { MainContainer } from "@/components/MainContainer";
import { Card } from "@/components/Card";

export default function Home() {
  const { data, status } = useSession()

  return status === "authenticated" ? (
    <MainContainer>
      <Card userProfile={data?.user} />
    </MainContainer>
  ) : (
    <MainContainer>
      <ConnectButton onClick={() => signIn("github")}>
        Login with GitHub
      </ConnectButton>
    </MainContainer>
  );
}
