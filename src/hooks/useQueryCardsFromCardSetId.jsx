import { DataStore, SortDirection } from "aws-amplify";
import { useEffect, useState } from "react";
import { Card } from "../models";

const useQueryCardsFromCardSetId = (cardSetId) => {
  const [cards, setCards] = useState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCards = async () => {
    if (cardSetId) {
      const respCards = await DataStore.query(
        Card,
        (c) => c.cardsetID("eq", cardSetId),
        {
          sort: (s) => s.updatedAt(SortDirection.DESCENDING),
        }
      );
      setCards(respCards);
    }
  };
  useEffect(() => {
    fetchCards();
    const subscription = DataStore.observe(Card).subscribe(fetchCards);
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSetId]);
  return { cards };
};

export default useQueryCardsFromCardSetId;
