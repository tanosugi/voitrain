import { Authenticator } from "@aws-amplify/ui-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import EditCardSet from "../../../src/components/EditCardSet";
import EditCardsInCardSet from "../../../src/components/EditCardsInCardSet";
import Center from "../../../src/layout/center";

const Home: NextPage = () => {
  const router = useRouter();
  const { cardSetId } = router.query;
  return (
    <>
      <Authenticator>
        <Center>
          <EditCardSet cardSetId={String(cardSetId)} />
          <EditCardsInCardSet cardSetId={String(cardSetId)} />
        </Center>
      </Authenticator>
    </>
  );
};

export default Home;
