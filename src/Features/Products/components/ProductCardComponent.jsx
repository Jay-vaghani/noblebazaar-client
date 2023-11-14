import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function ProductCardComponent() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        elevation={3}
        sx={{
          boxShadow: "3px 3px 8px #e4e4e4b0",
        }}
      >
        <CardMedia
          sx={{
            height: "200px",
            p: 3,
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._AC_UF894,1000_QL80_FMwebp_.jpg"
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={"500"}>
            Samsung Galaxy Z Fold 5
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Experience the future of mobile tech with the Samsung Galaxy Z Flip
            5 innovation, elegance, and flawless folding in one ...
          </Typography>
          <CardActions
            sx={{
              px: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "#0080fb !important" }}
              size="small"
              disableElevation
            >
              view
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#0080fb !important" }}
              size="small"
              disableElevation
            >
              add cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCardComponent;
