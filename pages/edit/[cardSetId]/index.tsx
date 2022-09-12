import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "react-modal";
import awsExports from "../../../src/aws-exports";
import useQueryCardSetFromId from "../../../src/hooks/useQueryCardSetFromId";
import useQueryCardsFromCardSetId from "../../../src/hooks/useQueryCardsFromCardSetId";
import CardListingViewCollection from "../../../src/ui-components/CardListingViewCollection";
import CardSetEdit from "../../../src/ui-components/CardSetEdit";

Amplify.configure(awsExports);

const Home: NextPage = () => {
  const router = useRouter();

  const [editModalIsOpen, setEditModalIsOpen] = useState(true);
  const { cardSetId } = router.query;
  const { cards } = useQueryCardsFromCardSetId(cardSetId);
  const { cardSet } = useQueryCardSetFromId(cardSetId);
  return (
    <>
      <Authenticator>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
        >
          <View>
            <CardSetEdit cardSet={cardSet} />
            <CardListingViewCollection items={cards} />
            <Modal isOpen={editModalIsOpen} style={customStyles}>
              モーダル開いた
            </Modal>
          </View>
        </Flex>
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
