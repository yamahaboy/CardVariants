import { Reducer } from "@reduxjs/toolkit";
import { CardProps } from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";

type CardReducerType = {
  card: CardProps[] | null;
  likeCard: CardProps[];
  filterCard: CardProps[] | null;
};
const defaultState: CardReducerType = {
  card: null,
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
      return { ...state, likeCard: action.likeCardData };
    case CardsReducerEnum.SET_FILTER_CARD:
      return { ...state, likeCard: action.title };
    case CardsReducerEnum.REMOVE_LIKED_CARD:
      return {
        ...state,
        likeCard: [...state.likeCard, ...action.likeCardData],
      };
    default:
      return { ...state };
  }
};

export default cardReducer;
