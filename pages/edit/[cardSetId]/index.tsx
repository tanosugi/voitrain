import { Authenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import EditCardsInCardSet from "../../../src/components/EditCardsInCardSet";
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
  const { cardSet } = useQueryCardSetFromId(cardSetId);
  const [name, setName] = useState();
  const { cards } = useQueryCardsFromCardSetId(cardSetId);
  const [cardToEdit, setCardToEdit] = useState();
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
    <>
      <Authenticator>
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
          <EditCardsInCardSet cardSetId={cardSetId} />
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
                card={
                  new Card({
                    word: "",
                    image_url: "",
                    cardsetID: cardSet && cardSet?.id ? cardSet?.id : "",
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
