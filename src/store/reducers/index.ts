import { Reducer } from "@reduxjs/toolkit";
import { CardProps } from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";

type CardReducerType = {
  card: CardProps[];
  likeCard: CardProps[];
  filterCard: CardProps[] | null;
};
const defaultState: CardReducerType = {
  card: [],
  likeCard: [],
  filterCard: null,
};

const cardReducer: Reducer<CardReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case CardsReducerEnum.SET_CARD:
      return { ...state, card: action.cardData };
    case CardsReducerEnum.LIKE_Card:
      return { ...state, likeCard: state.likeCard.concat(action.likeCardData) };
    case CardsReducerEnum.SET_FILTER_CARD:
      return { ...state, likeCard: action.title };
    default:
      return { ...state };
  }
};

export default cardReducer;
