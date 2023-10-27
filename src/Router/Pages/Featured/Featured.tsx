import { Card } from "../../../containers/Card/Card";
import { Header } from "../../../containers/Header/Header";
import { useAppSelector } from "../../../store/store";
import { LikedCards } from "./styles";

export const Featured: React.FC = () => {
  const likedCards = useAppSelector((state) => state.cardReducer.likeCard);

  return (
    <>
      <Header />
      <h1>Featured Cards</h1>
      <LikedCards>
        {likedCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            imgSrc={card.imgSrc}
            text={card.text}
            variant={card.variant}
            isLiked={card.isLiked ? true : null}
          />
        ))}
      </LikedCards>
    </>
  );
};
