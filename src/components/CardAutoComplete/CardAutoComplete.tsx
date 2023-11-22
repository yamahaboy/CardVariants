import React, { BaseSyntheticEvent, useState } from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setFilterCard } from "../../store/reducers/Actions";

const CardAutoComplete: React.FC = () => {
  const dispatch = useAppDispatch();

  const {posts} = useAppSelector((state) => state.cardReducer);

  const titleNames: string[] = posts ? posts.map((post) => post.title) : [];

  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const [findInput, setFindInput] = useState<string>("");

  const handleNameChange = (
    event: BaseSyntheticEvent,
    Value2: string | null
  ) => {
    const newValue = event.target.value;
    setSelectedTitle(Value2);
  };

  const handleAutoCompleteInputChange = (
    event: BaseSyntheticEvent,
    newInputValue: string
  ) => {
    setFindInput(newInputValue);
    dispatch(setFilterCard(newInputValue));
  };
  return (
    <Box sx={{ width: "40%" }}>
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
