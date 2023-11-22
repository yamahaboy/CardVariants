import { CardSize } from "./CardSize";

export type CommentsProps = {
  postId: number;
  id: number;
  name: string;
  body: string;
};


export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
  imgSrc: string;
  variant: CardSize;
  isLiked: boolean | null;
  setIsLiked?: (id: number, isLiked: boolean) => void;
}

export type UsersProps = {
  id: number;
  name: string;
}

export type Img = {
  imgSrc: string
}

