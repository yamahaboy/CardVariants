import { CardSize } from "./CardSize";

export type CardProps = {
  id: number;
  title: string;
  imgSrc: string;
  text: string;
  variant: CardSize;
  isLiked: boolean | null;
  setIsLiked?: (id: number, isLiked: boolean | null) => void;
};
