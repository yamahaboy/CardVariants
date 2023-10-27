import { datesForCards } from "../../../dates/datesForCard";
import { Card } from "../../../containers/Card/Card";
import { CardListContainer } from "./styles";
import { useEffect, useState } from "react";
import { CardProps } from "../../../models/CardProps";
import { Header } from "../../../containers/Header/Header";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { likeCard, removeLikedCard } from "../../../store/reducers/Actions";

export const CardList: React.FC = () => {
  const likedCards = useAppSelector((state) => state.cardReducer.likeCard);
  const dispatch = useAppDispatch();
  const cardData = datesForCards();

  const [cards, setCards] = useState<CardProps[]>([]);

  const handleLikeControl = (cardId: number, newLikeValue: boolean) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isLiked: newLikeValue } : card
      )
    );

    if (newLikeValue) {
      const findlikedCard = cardData.find((card) => card.id === cardId);

      const checkOnDuplication = likedCards.some((card) => card.id === cardId);

      if (findlikedCard && !checkOnDuplication) {
        dispatch(likeCard([findlikedCard]));
        console.log(likedCards);
      }
    } else {
      dispatch(removeLikedCard(cardId));
    }
  };
  useEffect(() => {
    setCards(cardData);
    console.log("set");
  }, []);

  return (
    <>
      <Header />
      <CardListContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            imgSrc={card.imgSrc}
            text={card.text}
            variant={card.variant}
            isLiked={card.isLiked}
            setIsLiked={handleLikeControl}
          />
        ))}
      </CardListContainer>
    </>
  );
};
