import { Reducer } from "@reduxjs/toolkit";
import {
  CommentsProps,
  Img,
  PostProps,
  UsersProps,
} from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";

type CardReducerType = {
  likeCards: PostProps[];
  filterCard: string;
  posts: PostProps[];
  users: UsersProps[];
  comments: CommentsProps[];
  userFilter: number | null;
};
const defaultState: CardReducerType = {
  likeCards: [],
  filterCard: "",
  posts: [],
  users: [],
  comments: [],
  userFilter: null,
};

const cardReducer: Reducer<CardReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case CardsReducerEnum.SET_NEW_CARD:
      return { ...state, posts: [...state.posts, action.newCardData] };
    case CardsReducerEnum.LIKE_Card:
      return { ...state, likeCards: action.likeCard };
    case CardsReducerEnum.SET_FILTER_CARD:
      return { ...state, filterCard: action.title };
    case CardsReducerEnum.GET_POSTS:
      return { ...state, posts: action.postsData };
    case CardsReducerEnum.GET_USERS:
      return { ...state, users: action.usersData };
    case CardsReducerEnum.GET_COMMENTS:
      return { ...state, comments: action.commentsData };
    case CardsReducerEnum.SET_USER_FILTER:
      return { ...state, userFilter: action.userFilterData };
    default:
      return { ...state };
  }
};

export default cardReducer;
