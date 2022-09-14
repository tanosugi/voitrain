import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import useQueryCardSetFromId from "../../../src/hooks/useQueryCardSetFromId";
import useQueryCardsFromCardSetId from "../../../src/hooks/useQueryCardsFromCardSetId";
import Center from "../../../src/layout/center";
import CardEdit from "../../../src/ui-components/CardEdit";
import CardListingViewCollection from "../../../src/ui-components/CardListingViewCollection";
import CardSetDetail from "../../../src/ui-components/CardSetDetail";

const Home: NextPage = () => {
  const router = useRouter();

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
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
                    setEditModalIsOpen(true);
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
            <CardListingViewCollection
              items={cards}
              overrideItems={({ item, index }) => ({
                overrides: {
                  pencil: {
                    onClick: () => {
                      setEditModalIsOpen(true);
                      setCardToEdit(item);
                    },
                  },
                },
              })}
            />
            <Modal isOpen={editModalIsOpen} style={customStyles}>
              <Center>
                <CardEdit
                  card={cardToEdit}
                  overrides={{
                    close: {
                      onClick: () => {
                        setEditModalIsOpen(false);
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
