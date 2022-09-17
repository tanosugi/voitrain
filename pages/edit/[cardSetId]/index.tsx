import { Authenticator } from "@aws-amplify/ui-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import EditCardSet from "../../../src/components/EditCardSet";
import EditCardsInCardSet from "../../../src/components/EditCardsInCardSet";
import Center from "../../../src/layout/center";
import Layout from "../../../src/layout/layout";

const Home: NextPage = () => {
  const router = useRouter();
  const { cardSetId } = router.query;
  return (
    <>
      <Authenticator>
        <Layout>
          <Center>
            <EditCardSet cardSetId={String(cardSetId)} />
            <EditCardsInCardSet cardSetId={String(cardSetId)} />
          </Center>
        </Layout>
      </Authenticator>
    </>
  );
};

export default Home;
