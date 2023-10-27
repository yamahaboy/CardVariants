import React, { useState } from "react";
import { CardProps } from "../../models/CardProps";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  StyledCard,
  CardContainer,
  CardInfoContainer,
  DateNow,
  CardTitle,
  CardText,
  CardImage,
  Img,
  ButtonBlock,
  GapContainer,
} from "./styles";
import CardPage from "../../components/CardPage/CardPage";

interface LikeIconProps {
  isLiked: boolean | null;
  onClick: () => void;
}

interface BookIconProps {
  isBookmarked: boolean | null;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = (props) => {
  const { id, title, imgSrc, text, variant, isLiked, setIsLiked } = props;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLikeClick = () => {
    setIsLiked && setIsLiked(id, true);
  };

  const handleDislikeClick = () => {
    setIsLiked && setIsLiked(id, false);
  };

  const hableClickOpenModal = () => {
    setIsModalOpen(true);
  };
  const hableClickCloseModal = () => {
    setIsModalOpen(false);
  };

  const LikeIcon: React.FC<LikeIconProps> = ({ isLiked, onClick }) => {
    return (
      <ThumbUpAltIcon
        onClick={onClick}
        style={{ color: isLiked === true ? "#fff700" : "#000" }}
      />
    );
  };
  const DisLikeIcon: React.FC<LikeIconProps> = ({ isLiked, onClick }) => {
    return (
      <ThumbDownAltIcon
        onClick={onClick}
        style={{ color: isLiked === false ? "#fff700" : "#000" }}
      />
    );
  };

  const handleBookmarkClick = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const BookmarkIcon: React.FC<BookIconProps> = ({ isBookmarked, onClick }) => {
    return (
      <BookmarksIcon
        onClick={onClick}
        style={{ color: isBookmarked ? "#fff700" : "#000" }}
      />
    );
  };

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate);
  const currentYear = currentDate.getFullYear();

  return (
    <StyledCard key={id} variant={variant}>
      <CardContainer variant={variant}>
        <CardInfoContainer>
          <DateNow>
            <p>
              {currentMonth} {currentDay}, {currentYear}
            </p>
          </DateNow>
          <CardTitle variant={variant}>{title}</CardTitle>
          {variant === "large" && <CardText>{text}</CardText>}
        </CardInfoContainer>
        <CardImage variant={variant} onClick={hableClickOpenModal}>
          <Img src={imgSrc} variant={variant} />
        </CardImage>
      </CardContainer>
      <ButtonBlock>
        <GapContainer>
          <LikeIcon isLiked={isLiked} onClick={handleLikeClick} />
          <DisLikeIcon isLiked={isLiked} onClick={handleDislikeClick} />
        </GapContainer>
        <GapContainer>
          <BookmarkIcon
            isBookmarked={isBookmarked}
            onClick={handleBookmarkClick}
          />
          <MoreHorizIcon />
        </GapContainer>
      </ButtonBlock>
      <CardPage
        open={isModalOpen}
        onClose={hableClickCloseModal}
        imageSrc={imgSrc}
      />
    </StyledCard>
  );
};
