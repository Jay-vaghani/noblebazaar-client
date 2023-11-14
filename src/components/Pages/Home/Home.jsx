import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import SearchBar from "../../Layout/Navbar/SearchBar";
import ProductCardComponent from "../../../Features/Products/components/ProductCardComponent";

function Home() {
  return (
    <Box position={"relative"}>
      <Stack
        width={"100%"}
        display={{
          xs: "block",
          sm: "none",
        }}
      >
        <SearchBar mobile={true} />
      </Stack>
      <div className="banner">
        <h1 className="banner-font-1 abc">Noble Bazaar</h1>
        <h1 className="banner-font-2 abc">Ecommerce</h1>
      </div>
      <Grid container spacing={3} justifyContent={"start"} px={2} my={2}>
        <ProductCardComponent />
      </Grid>
    </Box>
  );
}

export default Home;
