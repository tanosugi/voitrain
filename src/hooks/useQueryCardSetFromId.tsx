import { DataStore } from "aws-amplify";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { CardSet } from "../models";

const useQueryCardsFromCardSetId = (cardSetId: string) => {
  const [cardSet, setCardSet] = useState<CardSet>();
  const [
    { data: unsplashData, loading: unsplashLoading, error: unsplashError },
    executeUnsplash,
  ] = useAxios(
    {
      url:
        "https://api.unsplash.com/photos/random?query=" +
        cardSet?.name +
        "&client_id=" +
        "mY-igiaeuryUGjej_u6W2NK7WLYXTnihV1G_0Cqq0Pc",
    },
  );
  const fetchCards = async () => {
    if (cardSetId) {
      const respCardSet = await DataStore.query(CardSet, cardSetId);
      if (respCardSet) {
        setCardSet(respCardSet);
      }
    } else if (cardSetId == "") {
      setCardSet(new CardSet({ name: "", image_url: "" }));
    }
  };
  const updateCardSetImageUrl = async () => {
    try {
      await executeUnsplash();
    } catch (e) {
      alert(e);
    }
    DataStore.save(
      CardSet.copyOf(cardSet || new CardSet({}), (updated) => {
        updated.image_url = unsplashData?.urls?.small;
      })
    );
  };
  useEffect(() => {
    fetchCards();
    const subscription = DataStore.observe(CardSet).subscribe(fetchCards);
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSetId]);
  return {
    unsplashData,
    cardSet,
    updateCardSetImageUrl,
    executeUnsplash,
  };
};

export default useQueryCardsFromCardSetId;
