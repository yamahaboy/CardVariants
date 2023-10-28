import React, { BaseSyntheticEvent } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setFilterCard } from "../../store/reducers/Actions";
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
  const titleNames: string[] = cards ? cards.map((card) => card.title) : [];

  const handleNameChange = (
    event: BaseSyntheticEvent,
    newValue: string | null
  ) => {
    setSelectedTitle(newValue);
    dispatch(setFilterCard(newValue));
  };

  return (
    <Box sx={{ width: "20%" }}>
      <Autocomplete
        options={titleNames}
        value={selectedTitle}
        onChange={handleNameChange}
        renderInput={(params) => <TextField {...params} label="Find Card" />}
      />
    </Box>
  );
};

export default CardAutoComplete;
