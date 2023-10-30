import { Reducer } from "@reduxjs/toolkit";
import { CardProps } from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";

type CardReducerType = {
  card: CardProps[];
  likeCard: CardProps[];
  filterCard: string;
};
const defaultState: CardReducerType = {
  card: [],
  likeCard: [],
  filterCard: "",
};

const cardReducer: Reducer<CardReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case CardsReducerEnum.SET_CARD:
      return { ...state, card: action.cardData };
    case CardsReducerEnum.LIKE_Card:
      return { ...state, likeCard: action.likeCard };
    case CardsReducerEnum.SET_FILTER_CARD:
      return { ...state, filterCard: action.title };
    default:
      return { ...state };
  }
};

export default cardReducer;
