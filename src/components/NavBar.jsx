import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MobileMenu from "./MobileMenu";

function NavBar() {
  return (
    <Box
      px={1.3}
      py={1.5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow={"0px 2px 25px 0px #e2e2e254"}
    >
      <Typography variant="h5" fontWeight={600} fontSize={26} color={"#003aff"}>
        Noble Bazaar
      </Typography>
      <MobileMenu />
    </Box>
  );
}

export default NavBar;
