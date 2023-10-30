import { Card } from "../../../containers/Card/Card";
import { Header } from "../../../components/Header/Header";
import { useAppSelector } from "../../../store/store";
import { LikedCards } from "./styles";
import { Box } from "@mui/material";

export const Featured: React.FC = () => {
  const likedCards = useAppSelector((state) => state.cardReducer.likeCard);

  return (
    <Box sx={{ backgroundColor: "#cfcfcf", height: "100%" }}>
      <Header />
      <h1>Featured Cards</h1>
      <LikedCards>
        {likedCards &&
          likedCards.map((card) => <Card key={card.id} card={card} />)}
      </LikedCards>
    </Box>
  );
};
