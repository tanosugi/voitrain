import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import Center from "../src/layout/center";
import { customStyles } from "../src/layout/modalStyle";
import { CardSet } from "../src/models";
import {
  CardSetCreateView,
  CardSetViewCollection,
  Pluscircle,
} from "../src/ui-components";

const Home = () => {
  const [modalToOpen, setModalToOpen] = useState("");
  const router = useRouter();
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
        <Center>
          <Pluscircle
            overrides={{
              Pluscircle: {
                onClick: () => {
                  setModalToOpen("CardCreateView");
                },
              },
            }}
          />
        </Center>
        <Modal isOpen={modalToOpen == "CardCreateView"} style={customStyles}>
          <Center>
            <CardSetCreateView
              cardSet={
                new CardSet({
                  name: "",
                  image_url: "",
                })
              }
              overrides={{
                close: {
                  onClick: () => {
                    setModalToOpen("");
                  },
                },
              }}
            />
          </Center>
        </Modal>
        <Center>
          <CardSetViewCollection />
        </Center>
      </AmplifyProvider>
    </Authenticator>
  );
};

export default Home;
