import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import useQueryCardSetFromId from "../../../src/hooks/useQueryCardSetFromId";
import useQueryCardsFromCardSetId from "../../../src/hooks/useQueryCardsFromCardSetId";
import Center from "../../../src/layout/center";
import { Card } from "../../../src/models";
import { CardCreate, Pluscircle } from "../../../src/ui-components";
import CardEdit from "../../../src/ui-components/CardEdit";
import CardListingViewCollection from "../../../src/ui-components/CardListingViewCollection";
import CardSetDetail from "../../../src/ui-components/CardSetDetail";

const Home: NextPage = () => {
  const router = useRouter();

  const [modalToOpen, setModalToOpen] = useState("");
  const { cardSetId } = router.query;
  const { cards } = useQueryCardsFromCardSetId(cardSetId);
  const { cardSet } = useQueryCardSetFromId(cardSetId);
  const [name, setName] = useState();
  const [cardToEdit, setCardToEdit] = useState();
  return (
    <>
      <Authenticator>
        <AmplifyProvider>
          <Center>
            <CardSetDetail
              cardSet={cardSet}
              overrides={{
                pencil: {
                  onClick: () => {
                    setModalToOpen("CardSetEdit");
                  },
                },
              }}
            />
            {/* <Modal isOpen={editModalIsOpen} style={customStyles}>
              <Center>
                <CardSetEdit
                  cardSet={cardSet}
                  overrides={{
                    close: {
                      onClick: () => {
                        setEditModalIsOpen(false);
                      },
                    },
                    TextField: {
                      onChange: (event: any) => {
                        if (event.target.value == "") {
                          setName(cardSet.name);
                        } else {
                          setName(event.target.value);
                        }
                      },
                    },
                  }}
                />
              </Center>
            </Modal> */}

            <Center>
              <Pluscircle
                overrides={{
                  Pluscircle: {
                    onClick: () => {
                      setModalToOpen("CardCreate");
                    },
                  },
                }}
              />
            </Center>

            <Modal isOpen={modalToOpen == "CardCreate"} style={customStyles}>
              <Center>
                <CardCreate
                  // card={cards && cards[0]}
                  card={
                    new Card({
                      word: "",
                      image_url: "",
                      cardsetID: cardSet?.id,
                    })
                  }
                  overrides={{
                    close: {
                      onClick: () => {
                        setModalToOpen("");
                      },
                    },
                    // TextField35652558: { value: cardSet?.id },
                  }}
                />
              </Center>
            </Modal>
            <CardListingViewCollection
              items={cards}
              overrideItems={({ item, index }) => ({
                overrides: {
                  pencil: {
                    onClick: () => {
                      setModalToOpen("CardEdit");
                      setCardToEdit(item);
                    },
                  },
                },
              })}
            />
            <Modal isOpen={modalToOpen == "CardEdit"} style={customStyles}>
              <Center>
                <CardEdit
                  card={cardToEdit}
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
          </Center>
        </AmplifyProvider>
      </Authenticator>
    </>
  );
};

const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40%",
  },
};

export default Home;
