import { Hub } from "aws-amplify";
import { FC, ReactElement, useState } from "react";
import Modal from "react-modal";
import useQueryCardSetFromId from "../hooks/useQueryCardSetFromId";
import Center from "../layout/center";
import { customStyles } from "../layout/modalStyle";
import { CardSetDetailView, CardSetEditView } from "../ui-components";

const EditCardSet: FC<{
  cardSetId: string;
}> = ({ cardSetId }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
  const { cardSet, updateCardSetImageUrl } = useQueryCardSetFromId(cardSetId);
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
      <CardSetDetailView
        cardSet={cardSet}
        overrides={{
          pencil: {
            onClick: () => {
              setModalToOpen("CardSetEdit");
            },
          },
          refresh: {
            onClick: updateCardSetImageUrl,
          },
        }}
      />
      <Modal isOpen={modalToOpen == "CardSetEdit"} style={customStyles}>
        <Center>
          {cardSet && (
            <CardSetEditView
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
    </Center>
  );
};

export default EditCardSet;
