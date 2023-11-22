import { Dispatch } from "react";
import {
  CommentsProps,
  Img,
  PostProps,
  UsersProps,
} from "../../models/CardProps";
import { CardsReducerEnum } from "./ActionsType";
import { AnyAction } from "@reduxjs/toolkit";
import { getComments, getPosts, getUsers } from "../../api/services/service";

export const setCard = (newCardData: PostProps) => {
  return { type: CardsReducerEnum.SET_NEW_CARD, newCardData };
};

export const likeCard = (likeCardData: PostProps[]) => {
  return { type: CardsReducerEnum.LIKE_Card, likeCard: likeCardData };
};

export const setFilterCard = (title: string) => {
  return { type: CardsReducerEnum.SET_FILTER_CARD, title };
};

export const getUsersAtion = (usersData: UsersProps[]) => {
  return { type: CardsReducerEnum.GET_USERS, usersData };
};

export const getPostsAction = (postsData: PostProps[]) => {
  return { type: CardsReducerEnum.GET_POSTS, postsData };
};

export const getCommentsAtion = (commentsData: CommentsProps[]) => {
  return { type: CardsReducerEnum.GET_COMMENTS, commentsData };
};
export const setUserFilter = (userFilterData: number | null) => {
  return { type: CardsReducerEnum.SET_USER_FILTER, userFilterData };
};

export const getPostsUsersToStore = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const [dataUsers, dataPosts, dataComments] = await Promise.all([
      getUsers(),
      getPosts(),
      getComments(),
    ]);
    dispatch(getUsersAtion(dataUsers));
    dispatch(getPostsAction(dataPosts));
    dispatch(getCommentsAtion(dataComments));
  };
};
