import React, { useState } from "react";
import { CardProps } from "../../models/CardProps";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { NavLink } from "react-router-dom";
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
  console.log("isLiked", isLiked);
  console.log("setIsLiked", setIsLiked);
  const [localIsLiked, setLocalIsLiked] = useState<boolean | null>(
    isLiked || null
  );
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLikeClick = () => {
    setLocalIsLiked((prevIsLiked) => {
      if (prevIsLiked === true) {
        return null;
      } else {
        return true;
      }
    });
    if (setIsLiked) {
      setIsLiked(id, localIsLiked === true ? localIsLiked : null);
    }
  };
  const handleDislikeClick = () => {
    setLocalIsLiked((prevIsLiked) => {
      if (prevIsLiked === false) {
        return null;
      } else {
        return false;
      }
    });
    if (setIsLiked) {
      setIsLiked(id, localIsLiked === false ? localIsLiked : null);
    }
  };

  const handleBookmarkClick = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
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
      <NavLink
        to={`/cardpage/${id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
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
          <CardImage variant={variant}>
            <Img src={imgSrc} variant={variant} />
          </CardImage>
        </CardContainer>
      </NavLink>
      <ButtonBlock>
        <GapContainer>
          <LikeIcon isLiked={localIsLiked} onClick={handleLikeClick} />
          <DisLikeIcon isLiked={localIsLiked} onClick={handleDislikeClick} />
        </GapContainer>
        <GapContainer>
          <BookmarkIcon
            isBookmarked={isBookmarked}
            onClick={handleBookmarkClick}
          />
          <MoreHorizIcon />
        </GapContainer>
      </ButtonBlock>
    </StyledCard>
  );
};
