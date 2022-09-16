import { Hub } from "aws-amplify";
import { FC, ReactElement, useState } from "react";
import Modal from "react-modal";
import useQueryCardsFromCardSetId from "../hooks/useQueryCardsFromCardSetId";
import Center from "../layout/center";
import { Card } from "../models";
import {
  CardCreate,
  CardEdit,
  CardListingViewCollection,
  Pluscircle,
} from "../ui-components";

const EditCardsInCardSet: FC<{
  cardSetId: string;
  modalStyle?: Modal.Styles | undefined;
}> = ({ cardSetId, modalStyle }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
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
    <Center>
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
      <Modal isOpen={modalToOpen == "CardCreate"} style={modalStyle}>
        <Center>
          <CardCreate
            card={
              new Card({
                word: "",
                image_url: "",
                cardsetID: cardSetId,
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
      <Modal isOpen={modalToOpen == "CardEdit"} style={modalStyle}>
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
  );
};

export default EditCardsInCardSet;
