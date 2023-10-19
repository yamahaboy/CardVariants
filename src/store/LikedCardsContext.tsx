import { createContext, useContext, useState, ReactNode } from "react";
import { CardProps } from "../models/CardProps";

interface LikedCardsContextType {
  likedCards: CardProps[];
  addLikedCard: (card: CardProps) => void;
  removeLikedCard: (cardId: number) => void;
}

interface LikedCardsProviderProps {
  children: ReactNode;
}

const LikedCardsContext = createContext<LikedCardsContextType | undefined>(
  undefined
);

export function LikedCardsProvider({ children }: LikedCardsProviderProps) {
  const [likedCards, setLikedCards] = useState<CardProps[]>([]);

  const addLikedCard = (card: CardProps) => {
    setLikedCards([...likedCards, card]);
  };

  const removeLikedCard = (cardId: number) => {
    setLikedCards(likedCards.filter((card) => card.id !== cardId));
  };

  return (
    <LikedCardsContext.Provider
      value={{ likedCards, addLikedCard, removeLikedCard }}
    >
      {children}
    </LikedCardsContext.Provider>
  );
}

export function useLikedCards() {
  const context = useContext(LikedCardsContext);
  if (context === undefined) {
    throw new Error("Context error");
  }
  return context;
}
