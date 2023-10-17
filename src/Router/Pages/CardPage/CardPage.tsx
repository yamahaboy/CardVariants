import { useParams } from "react-router-dom";
import { datesForCards } from "../../../dates/datesForCard";
import { FullCard } from "./style";

export const CardPage = () => {
  const { id } = useParams();
  const cardData = datesForCards();

  const card = cardData.find((card) => card.id === Number(id));

  if (!card) {
    return <div>Can`t find the card</div>;
  }

  return (
    <FullCard key={card.id}>
      <img src={card.imgSrc} />
      <h1>{card.title}</h1>
      <p>{card.text}</p>
    </FullCard>
  );
};
