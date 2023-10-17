import { datesForCards } from "../../../dates/datesForCard";
import { Card } from "../../../containers/Card/Card";
import { CardListContainer } from "./styles";

export const CardList: React.FC = () => {
  const cardData = datesForCards();

  return (
    <CardListContainer>
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          imgSrc={card.imgSrc}
          text={card.text}
          variant={card.variant}
          isLiked={card.isLiked}
        />
      ))}
    </CardListContainer>
  );
};
