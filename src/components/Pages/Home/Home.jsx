import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import SearchBar from "../../Layout/Navbar/SearchBar";
import ProductComponent from "../../ProductComponent";

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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <ProductComponent />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
