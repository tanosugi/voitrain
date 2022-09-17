import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import { useState } from "react";
import Modal from "react-modal";
import useQueryCardSetFromId from "../src/hooks/useQueryCardSetFromId";
import Center from "../src/layout/center";
import Layout from "../src/layout/layout";
import { customStyles } from "../src/layout/modalStyle";
import {
  CardSetCreateView,
  CardSetViewCollection,
  Pluscircle,
} from "../src/ui-components";
import TabbarMyCardsChosenView from "../src/ui-components/TabbarMyCardsChosenView";

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
              <TabbarMyCardsChosenView />
            </Center>
            <Center>
              <Pluscircle
                overrides={{
                  Pluscircle: {
                    onClick: () => {
                      setModalToOpen("CardCreateView");
                    },
                    margin: "20px 0px 20px 0px",
                  },
                }}
              />
            </Center>
            <Modal
              isOpen={modalToOpen == "CardCreateView"}
              style={customStyles}
            >
              <Center>
                {cardSet && (
                  <CardSetCreateView
                    cardSet={cardSet}
                    overrides={{
                      close: {
                        onClick: () => setModalToOpen(""),
                      },
                    }}
                  />
                )}
              </Center>
            </Modal>
            <Center>
              <CardSetViewCollection />
            </Center>
          </>
        </Layout>
      </AmplifyProvider>
    </Authenticator>
  );
};

export default Home;
