import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";
import { NavLinksArray } from "./NavLinks";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <>
      <Box
        py={1.5}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow={"0px 2px 25px 0px #e2e2e254"}
        position={{
          xs: "static",
          sm: "fixed",
        }}
        width={"100%"}
        top={0}
        zIndex={999}
        left={0}
        bgcolor={"white"}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          fontSize={26}
          color={"#0080fb"}
          pl={1.3}
        >
          Noble Bazaar
        </Typography>
        <Box
          width={"60%"}
          display={{
            xs: "none",
            sm: "block",
          }}
        >
          <SearchBar />
        </Box>

        <Stack direction={"row"} alignItems={"center"} justifyContent={"end"}>
          <MobileMenu />
        </Stack>
      </Box>
    </>
  );
}

export default NavBar;
