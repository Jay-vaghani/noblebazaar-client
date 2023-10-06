import { SearchRounded } from "@mui/icons-material";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

function SearchBar({ mobile }) {
  return (
    <Stack
     
    >
      <TextField
        variant="outlined"
        size="start"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded fontSize="medium" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                sx={{ bgcolor: "#0080fb !important" }}
                size="small"
                disableElevation
              >
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export default SearchBar;
