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
    const subscription = DataStore.observe(CardSet).subscribe(fetchCards);
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSetId]);
  return { cardSet, setCardSet };
};

export default useQueryCardsFromCardSetId;
