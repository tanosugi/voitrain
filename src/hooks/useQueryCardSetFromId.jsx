import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { CardSet } from "../models";

const useQueryCardsFromCardSetId = (cardSetId) => {
  const [cardSet, setCardSet] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCards = async () => {
    if (cardSetId) {
      const respCardSet = await DataStore.query(CardSet, cardSetId);
      setCardSet(respCardSet);
    }
  };
  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSetId]);
  return { cardSet };
};

export default useQueryCardsFromCardSetId;
