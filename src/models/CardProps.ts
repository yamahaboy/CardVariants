import { CardSize } from "./CardSize";

export type CardProps = {
  isLiked: any;
  setIsLiked: any;
  id: number;
  title: string;
  imgSrc: string;
  text: string;
  variant: CardSize;
};
