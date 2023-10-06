import { ArrowUpward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

function ScrollTop() {
  return (
    <Box
      position={"fixed"}
      bottom={40}
      right={30}
      display={{
        xs: "block",
        sm: "none",
      }}
    >
      <IconButton
        onClick={() => window.scrollTo(0, 0)}
        aria-label="delete"
        sx={{ color: "white", bgcolor: "#0080fb !important" }}
        size="small"
      >
        <ArrowUpward />
      </IconButton>
    </Box>
  );
}

export default ScrollTop;
