import { Card } from "../../../containers/Card/Card";
import { Header } from "../../../containers/Header/Header";
import { useLikedCards } from "../../../store/LikedCardsContext";
import { LikedCards } from "./styles";

export const Featured: React.FC = () => {
  const { likedCards } = useLikedCards();

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
