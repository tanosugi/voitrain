import { Authenticator } from "@aws-amplify/ui-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import EditCardsInCardSet from "../../../src/components/EditCardsInCardSet";
import useQueryCardSetFromId from "../../../src/hooks/useQueryCardSetFromId";
import Center from "../../../src/layout/center";
import CardSetDetail from "../../../src/ui-components/CardSetDetail";

const Home: NextPage = () => {
  const router = useRouter();
  const [modalToOpen, setModalToOpen] = useState("");
  const { cardSetId } = router.query;
  const { cardSet } = useQueryCardSetFromId(cardSetId);
  const [name, setName] = useState();
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
          <EditCardsInCardSet
            cardSetId={String(cardSetId)}
            modalStyle={customStyles}
          />
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
