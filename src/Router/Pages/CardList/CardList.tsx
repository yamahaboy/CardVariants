import { datesForCards } from "../../../dates/datesForCard";
import { Card } from "../../../containers/Card/Card";
import { CardListContainer } from "./styles";
import { useEffect, useState } from "react";
import { CardProps } from "../../../models/CardProps";
import { Header } from "../../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { likeCard } from "../../../store/reducers/Actions";
import { Box } from "@mui/material";

export const CardList: React.FC = () => {
  const likedCards = useAppSelector((state) => state.cardReducer.likeCard);
  const dispatch = useAppDispatch();
  const cardData = datesForCards();

  const [cards, setCards] = useState<CardProps[]>([]);

  const handleLikeControl = (cardId: number, newLikeValue: boolean) => {
    if (newLikeValue) {
      const findLikedCard = cardData.find((card) => card.id === cardId);
      const checkOnDuplication = likedCards.some((card) => card.id === cardId);

      if (findLikedCard && !checkOnDuplication) {
        const updatedLikeCard = [...likedCards, findLikedCard];
        dispatch(likeCard(updatedLikeCard));
      }
    } else {
      const updatedLikeCard = likedCards.filter((card) => card.id !== cardId);
      dispatch(likeCard(updatedLikeCard));
    }
  };

  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#cfcfcf" }}>
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
    </Box>
  );
};
