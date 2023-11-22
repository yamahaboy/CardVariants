import { Card } from "../../../containers/Card/Card";
import { CardListContainer } from "./styles";
import { useEffect, useMemo, useState } from "react";
import { Header } from "../../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  getPostsUsersToStore,
  likeCard,
} from "../../../store/reducers/Actions";
import { Box } from "@mui/material";
import { CardSize, ImgSize } from "../../../models/CardSize";
import UserList from "../../../containers/userList/UserList";

export const CardList: React.FC = () => {
  const { posts, likeCards, filterCard, userFilter } = useAppSelector(
    (state) => state.cardReducer
  );
  const dispatch = useAppDispatch();

  const filterBlog = posts.filter((post) => {
    return userFilter === null || post.userId === userFilter;
  });

  // const handleLikeControl = (postId: number, newLikeValue: boolean) => {
  //   if (newLikeValue) {
  //     const findLikedCard = posts.find((post) => post.id === postId);
  //     const checkOnDuplication = likeCards.some((post) => post.id === postId);

  //     if (findLikedCard && !checkOnDuplication) {
  //       const updatedLikeCard = [...likeCards, findLikedCard];
  //       dispatch(likeCard(updatedLikeCard));
  //     }
  //   } else {
  //     const updatedLikeCard = likeCards.filter((post) => post.id !== postId);
  //     dispatch(likeCard(updatedLikeCard));
  //   }
  // };
  const handleLikeControl = (postId: number, newLikeValue: boolean) => {
    const findLikedCard = posts.find((post) => post.id === postId);
    const checkOnDuplication = likeCards.some((likedCard) => likedCard.id === postId);
  
    if (findLikedCard) {
      const { cardSize, imgSize } = randomCardSizes[postId] || {};
      const likedCardWithDetails = {
        ...findLikedCard,
        variant: cardSize,
        imgSize,
      };
  
      if (newLikeValue && !checkOnDuplication) {
        const updatedLikeCard = [...likeCards, likedCardWithDetails];
        dispatch(likeCard(updatedLikeCard));
      } else {
        const updatedLikeCard = likeCards.filter((likedCard) => likedCard.id !== postId);
        dispatch(likeCard(updatedLikeCard));
      }
    }
  };
  

  const randomCardSizes: Record<
    number,
    { cardSize: CardSize; imgSize: ImgSize }
  > = useMemo(() => {
    const calculatedSizes: Record<
      number,
      { cardSize: CardSize; imgSize: ImgSize }
    > = {};
    posts.forEach((post) => {
      const cardSizes = Object.values(CardSize);
      const randomIndex = Math.floor(Math.random() * cardSizes.length);
      const randomCardSize = cardSizes[randomIndex];

      const imgSize =
        randomCardSize === CardSize.Large ? ImgSize.Large : ImgSize.Medium;

      calculatedSizes[post.id] = { cardSize: randomCardSize, imgSize };
    });

    return calculatedSizes;
  }, [posts]);

  useEffect(() => {
    dispatch(getPostsUsersToStore());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: "#cfcfcf" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CardListContainer>
          {filterBlog &&
            filterBlog
              .filter((post) => !filterCard || post.title === filterCard)
              .map((post) => {
                const { cardSize, imgSize } = randomCardSizes[post.id] || {};
                return (
                  <Card
                    key={post.id}
                    post={{
                      userId: post.id,
                      id: post.id,
                      title: post.title,
                      imgSrc: `https://random.imagecdn.app${imgSize}`,
                      body: post.body,
                      variant: cardSize,
                      isLiked: post.isLiked,
                      setIsLiked: (postId, isLiked) =>
                        handleLikeControl(postId, isLiked),
                    }}
                  />
                );
              })}
        </CardListContainer>
        <UserList />
      </Box>
    </Box>
  );
};
