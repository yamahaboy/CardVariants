import React, { BaseSyntheticEvent, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setFilterCard } from "../../store/reducers/Actions";
import { CardProps } from "../../models/CardProps";

const CardAutoComplete: React.FC = () => {
  const dispatch = useAppDispatch();

  const cards: CardProps[] = useAppSelector((state) => state.cardReducer.card);

  const titleNames: string[] = cards ? cards.map((card) => card.title) : [];

  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const [findInput, setFindInput] = useState<string>("");

  const handleNameChange = (
    event: BaseSyntheticEvent,
    Value2: string | null
  ) => {
    const newValue = event.target.value;
    setSelectedTitle(Value2);
    console.log("NewValue", newValue, "=>", Value2);
  };

  const handleAutoCompleteInputChange = (
    event: BaseSyntheticEvent,
    newInputValue: string
  ) => {
    setFindInput(newInputValue);
    dispatch(setFilterCard(newInputValue));
    console.log("newInputValue=>", newInputValue);
  };
  return (
    <Box sx={{ width: "20%" }}>
      <Autocomplete
        options={titleNames}
        value={selectedTitle}
        inputValue={findInput}
        onChange={handleNameChange}
        onInputChange={handleAutoCompleteInputChange}
        renderInput={(params) => <TextField {...params} label="Find Card" />}
      />
    </Box>
  );
};

export default CardAutoComplete;
