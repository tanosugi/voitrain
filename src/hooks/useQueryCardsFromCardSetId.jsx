import { DataStore, SortDirection } from "aws-amplify";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { Card } from "../models";
import { unsplashApiKeyRandom } from "../utils/envvar";

const useQueryCardsFromCardSetId = (cardSetId) => {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [
    { data: unsplashData, loading: unsplashLoading, error: unsplashError },
    executeUnsplash,
  ] = useAxios({
    url:
      "https://api.unsplash.com/photos/random?query=" +
      (cards?.length > 0 && cards[index]?.word) +
      "&client_id=" +
      unsplashApiKeyRandom,
  });
  const fetchCards = async () => {
    if (cardSetId) {
      const respCards = await DataStore.query(
        Card,
        (c) => c.cardsetID("eq", cardSetId),
        {
          sort: (s) => s.updatedAt(SortDirection.DESCENDING),
        }
      );
      if (respCards) {
        setCards(respCards);
      }
    }
  };
  const updateCardSetImageUrl = async (index) => {
    await setIndex(index);
    try {
      await executeUnsplash();
    } catch (e) {
      alert(e);
    }
    DataStore.save(
      Card.copyOf(cards[index] || new Card({}), (updated) => {
        updated.image_url = unsplashData?.urls?.small;
      })
    );
  };
  useEffect(() => {
    fetchCards();
    const subscription = DataStore.observe(Card).subscribe(fetchCards);
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSetId]);
  return { cards, updateCardSetImageUrl };
};

export default useQueryCardsFromCardSetId;
