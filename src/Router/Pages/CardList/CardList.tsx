import { datesForCards } from "../../../dates/datesForCard";
import { Card } from "../../../containers/Card/Card";
import { CardListContainer } from "./styles";
import { useEffect, useState } from "react";
import { CardProps } from "../../../models/CardProps";
import { useLikedCards } from "../../../store/LikedCardsContext";
import { Header } from "../../../containers/Header/Header";

export const CardList: React.FC = () => {
  const { likedCards, addLikedCard, removeLikedCard } = useLikedCards();
  const cardData = datesForCards();

  const [cards, setCards] = useState<CardProps[]>([]);

  const handleLikeControl = (cardId: number, newLikeValue: boolean) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isLiked: newLikeValue } : card
      )
    );

    if (newLikeValue) {
      const likedCard = cardData.find(
        (card: { id: number }) => card.id === cardId
      );

      const checkOnDuplication = likedCards.some((card) => card.id === cardId);

      if (likedCard && !checkOnDuplication) {
        addLikedCard(likedCard);
      }
    } else {
      removeLikedCard(cardId);
    }
  };

  useEffect(() => {
    setCards(cardData);
  }, [cardData]);

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
