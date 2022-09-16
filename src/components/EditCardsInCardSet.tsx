import { Hub } from "aws-amplify";
import { FC, ReactElement, useState } from "react";
import Modal from "react-modal";
import useQueryCardsFromCardSetId from "../hooks/useQueryCardsFromCardSetId";
import Center from "../layout/center";
import { customStyles } from "../layout/modalStyle";
import { Card } from "../models";
import {
  CardCreateView,
  CardEditView,
  CardListingViewCollection,
  Pluscircle,
} from "../ui-components";

const EditCardsInCardSet: FC<{
  cardSetId: string;
}> = ({ cardSetId }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
  const { cards } = useQueryCardsFromCardSetId(cardSetId);

  // const {
  //   data: cards,
  //   isLoading,
  //   error,
  // } = useDataStoreQuery(Card, (c) => c.cardsetID("eq", cardSetId), {
  //   sort: (s) => s.updatedAt(SortDirection.DESCENDING),
  // });
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
                setModalToOpen("CardCreateView");
              },
            },
          }}
        />
      </Center>
      <Modal isOpen={modalToOpen == "CardCreateView"} style={customStyles}>
        <Center>
          <CardCreateView
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
                setModalToOpen("CardEditView");
                setCardToEdit(item);
              },
            },
          },
        })}
      />
      <Modal isOpen={modalToOpen == "CardEditView"} style={customStyles}>
        <Center>
          <CardEditView
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
