import { Hub } from "aws-amplify";
import useAxios from "axios-hooks";
import { FC, ReactElement, useEffect, useState } from "react";
import Modal from "react-modal";
import useQueryCardSetFromId from "../hooks/useQueryCardSetFromId";
import Center from "../layout/center";
import { customStyles } from "../layout/modalStyle";
import { CardSetDetailView, CardSetEditView } from "../ui-components";

const EditCardSet: FC<{
  cardSetId: string;
}> = ({ cardSetId }): ReactElement => {
  const [modalToOpen, setModalToOpen] = useState("");
  const [imageURL, setImageURL] = useState("");
  const { cardSet, setCardSet } = useQueryCardSetFromId(cardSetId);
  const [
    { data: unsplashData, loading: unsplashLoading, error: unsplashError },
    executeUnsplash,
  ] = useAxios(
    {
      url:
        "https://api.unsplash.com/photos/random?query=" +
        "orange" +
        "&client_id=" +
        "mY-igiaeuryUGjej_u6W2NK7WLYXTnihV1G_0Cqq0Pc",
      // method: 'PUT'
    },
    { manual: true }
  );
  useEffect(() => {
    const temp: any = cardSet;
    console.log({ imageURL, temp });
    if (imageURL == "" && temp && temp.image_url) {
      setImageURL(temp?.image_url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSet]);
  useEffect(() => {
    if (unsplashData?.urls?.small) {
      setImageURL(unsplashData?.urls?.small);
    }
    // if (cardSet instanceof CardSet) {
    //   setCardSet({ ...cardSet, image_url: unsplashData?.urls?.small });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unsplashData]);
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
  console.log(imageURL);
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
        }}
      />
      <Modal isOpen={modalToOpen == "CardSetEdit"} style={customStyles}>
        <Center>
          <CardSetEditView
            cardSet={cardSet}
            overrides={{
              close: {
                onClick: () => {
                  setModalToOpen("");
                },
              },
              refresh: {
                onClick: () => {
                  // setImageURL("xxx");
                  executeUnsplash();
                  console.log(unsplashData?.urls?.small);
                },
              },
              TextField35772609: {
                value: imageURL,
              },
              Image: { src: imageURL },
            }}
          />
        </Center>
      </Modal>
    </Center>
  );
};

export default EditCardSet;
