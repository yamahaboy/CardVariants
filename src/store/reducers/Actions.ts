import { CardProps } from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";

export const setCard = (cardData: CardProps[]) => {
  return { type: CardsReducerEnum.SET_CARD, cardData };
};

export const likeCard = (likeCardData: CardProps[]) => {
  return { type: CardsReducerEnum.LIKE_Card, likeCardData };
};

export const setFilterCard = (title: string | null) => {
  return { type: CardsReducerEnum.SET_FILTER_CARD, title };
};
export const removeLikedCard = (cardId: number) => ({
  type: CardsReducerEnum.REMOVE_LIKED_CARD,
  payload: cardId,
});
