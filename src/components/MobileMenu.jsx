import React, { useState } from "react";
import {
  Close,
  Home,
  Logout,
  MenuRounded,
  Person,
  PersonAddAlt1,
  VpnKey,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListItemButtonNav from "./ListItemButton";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const drawerFunction = (link) => {
    setOpen(!open);
    navigate(link);
  };

  return (
    <>
      <Button disableRipple onClick={() => setOpen(!open)}>
        <MenuRounded fontSize="large" sx={{ color: "#003aff" }} />
      </Button>

      <SwipeableDrawer
        open={open}
        onClose={drawerFunction}
        onOpen={drawerFunction}
        anchor="right"
        disableBackdropTransition={true}
        transitionDuration={{ enter: 700, exit: 700 }}
      >
        <Box
          py={1.5}
          pl={1.3}
          boxShadow={"0px 2px 25px 0px #e2e2e254"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">Menu</Typography>
          <Button
            disableRipple
            onClick={() => setOpen(!open)}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Close fontSize="large" sx={{ color: "#003aff" }} />
          </Button>
        </Box>
        <List sx={{ width: "200px" }}>
          <ListItemButtonNav
            link={"/"}
            name="Home"
            drawerFunction={drawerFunction}
            icon={<Home fontSize="medium" sx={{ color: "#003aff" }} />}
          />
          <ListItemButtonNav
            link={"/profile"}
            name="Profile"
            drawerFunction={drawerFunction}
            icon={<Person fontSize="medium" sx={{ color: "#003aff" }} />}
          />
          <ListItemButtonNav
            link={"/login"}
            name="Login"
            drawerFunction={drawerFunction}
            icon={<VpnKey fontSize="medium" sx={{ color: "#003aff" }} />}
          />
          <ListItemButtonNav
            link={"/register"}
            name="Register"
            drawerFunction={drawerFunction}
            icon={<PersonAddAlt1 fontSize="medium" sx={{ color: "#003aff" }} />}
          />
          <ListItemButton>
            <ListItemIcon>
              <Logout fontSize="medium" sx={{ color: "#003aff" }} />
            </ListItemIcon>
            <Typography variant="h6">Logout</Typography>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;