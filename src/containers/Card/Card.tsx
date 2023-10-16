import React, { useState } from "react";
import { CardProps } from "../../models/CardProps";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Card: React.FC<CardProps> = (props) => {
  const { title, imgSrc, text, variant } = props;
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => {
      if (prevIsLiked === true) {
        return null;
      } else {
        return true;
      }
    });
  };

  const handleDislikeClick = () => {
    setIsLiked((prevIsLiked) => {
      if (prevIsLiked === false) {
        return null;
      } else {
        return false;
      }
    });
  };
  const handleBookmarkClick = () => {
    setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);
  };

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(currentDate);
  const currentYear = currentDate.getFullYear();

  return (
    <div className="{`card ${variant}`}">
      <div className="container">
        <div className="card-info-container">
          <div className="date-now">
            <div className="date-now">
              <p>
                {currentMonth} {currentDay}, {currentYear}
              </p>
            </div>
          </div>
          <div className="card-titte">{title}</div>
          {variant !== "small" && <div className="card-text">{text}</div>}
        </div>
        <div className="card-image">
          <img src={imgSrc} />
        </div>
      </div>
      <div className="button-block">
        <div className="good-bad">
          <button
            onClick={handleLikeClick}
            style={{ color: isLiked === true ? "yellow" : "white" }}
          >
            <ThumbUpAltIcon />
          </button>
          <button
            onClick={handleDislikeClick}
            style={{ color: isLiked === false ? "yellow" : "white" }}
          >
            <ThumbDownAltIcon />
          </button>
        </div>
        <div className="sava-more">
          <button
            onClick={handleBookmarkClick}
            style={{ color: isBookmarked ? "yellow" : "white" }}
          >
            <BookmarksIcon />
          </button>

          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};
