import { datesForCards } from "../../dates/datesForCard";
import { Card } from "../Card/Card";

export const CardList: React.FC = () => {
  const cardData = datesForCards();
  console.log(cardData);
  return (
    <div>
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          imgSrc={card.imgSrc}
          text={card.text}
          variant={card.variant}
          isLiked={card.isLiked}
          setIsLiked={card.setIsLiked}
        />
      ))}
    </div>
  );
};
