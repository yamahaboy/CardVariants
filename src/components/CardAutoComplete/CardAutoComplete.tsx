import React, { BaseSyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setCard } from "../../store/reducers/Actions";
// import { AutoCompleteStyles } from "./styles";
import { CardProps } from "../../models/CardProps";

interface CardAutoCompleteProps {
  selectedTitle: string | null;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

const CardAutoComplete: React.FC<CardAutoCompleteProps> = (props) => {
  const { selectedTitle, setSelectedTitle } = props;
  const dispatch = useAppDispatch();
  const cards: CardProps[] | null = useAppSelector(
    (state) => state.cardReducer.card
  );
  const userNames: string[] = cards ? cards.map((card) => card.title) : [];

  const handleNameChange = (
    event: BaseSyntheticEvent,
    newValue: string | null
  ) => {
    setSelectedTitle(newValue);
    dispatch(setCard(newValue));
  };

  return (
    <Autocomplete
      options={userNames}
      value={selectedTitle}
      onChange={handleNameChange}
      renderInput={(params) => <TextField {...params} label="Find Card" />}
    />
  );
};

export default CardAutoComplete;
