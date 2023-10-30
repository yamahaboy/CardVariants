import { CardProps } from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";

export const setCard = (cardData: CardProps[]) => {
  return { type: CardsReducerEnum.SET_CARD, cardData };
};

export const likeCard = (likeCardData: CardProps[]) => {
  return { type: CardsReducerEnum.LIKE_Card, likeCard: likeCardData };
};

export const setFilterCard = (title: string) => {
  console.log("Redux=>", title);
  return { type: CardsReducerEnum.SET_FILTER_CARD, title };
};
