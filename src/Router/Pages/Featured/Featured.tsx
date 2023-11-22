import { Card } from "../../../containers/Card/Card";
import { Header } from "../../../components/Header/Header";
import { useAppSelector } from "../../../store/store";
import { LikedCards } from "./styles";
import { Box } from "@mui/material";

export const Featured: React.FC = () => {
  const {likeCards} = useAppSelector((state) => state.cardReducer);
  return (
    <Box sx={{ backgroundColor: "#cfcfcf", height: "100%" }}>
      <Header />
      <h1>Featured Cards</h1>
      <LikedCards>
        {likeCards &&
          likeCards.map((post) => <Card key={post.id} post={post} />)}
      </LikedCards>
    </Box>
  );
};
