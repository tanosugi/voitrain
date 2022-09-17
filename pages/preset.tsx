import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import { useState } from "react";
import useQueryCardSetFromId from "../src/hooks/useQueryCardSetFromId";
import Center from "../src/layout/center";
import Layout from "../src/layout/layout";
import {
  PresetCardsViewCollection,
  TabbarPresetChosenView,
} from "../src/ui-components";

const Home = () => {
  const [modalToOpen, setModalToOpen] = useState("");
  const { cardSet } = useQueryCardSetFromId("");
  Hub.listen("ui", (capsule) => {
    if (
      [
        "actions:datastore:create:finished",
        "actions:datastore:update:finished",
      ].includes(capsule.payload.event)
    ) {
      setModalToOpen("");
    }
  });
  return (
    <Authenticator>
      <AmplifyProvider>
        <Layout>
          <>
            <Center>
              <TabbarPresetChosenView
                overrides={{
                  TabbarPresetChosenView: {
                    margin: "0px 0px 20px 0px",
                  },
                }}
              />
            </Center>
            <Center>
              <PresetCardsViewCollection />
            </Center>
          </>
        </Layout>
      </AmplifyProvider>
    </Authenticator>
  );
};

export default Home;
