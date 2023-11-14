import React, { useEffect, useState } from "react";
import {
  Close,
  Home,
  Logout,
  Person,
  PersonAddAlt1,
  VpnKey,
  MenuRounded,
  ShoppingCartRounded,
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
import { useDispatch } from "react-redux";
import { setUser } from "../../../Features/authentication/authenticationSlice";
import axios from "axios";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const drawerFunction = (link) => {
    setOpen(!open);
    navigate(link);
  };

  const handelLogout = async () => {
    // drawerFunction();
    const data = await fetch("https://noblebazaar.onrender.com/user/logout", {
      credentials: "include",
    });

    const res = await data.json();

    console.log(res);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        sx={{
          px: 0,
        }}
      >
        <MenuRounded fontSize="large" sx={{ color: "#0080fb" }} />
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
          <Typography variant="h5" fontWeight={500}>
            Menu
          </Typography>
          <Button
            disableRipple
            onClick={() => setOpen(!open)}
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Close fontSize="large" sx={{ color: "#0080fb" }} />
          </Button>
        </Box>
        <List sx={{ width: "200px" }}>
          <ListItemButtonNav
            link={"/"}
            name="Home"
            drawerFunction={drawerFunction}
            icon={<Home fontSize="medium" sx={{ color: "#0080fb" }} />}
          />
          <ListItemButtonNav
            link={"/profile"}
            name="Profile"
            drawerFunction={drawerFunction}
            icon={<Person fontSize="medium" sx={{ color: "#0080fb" }} />}
          />
          <ListItemButtonNav
            link={"/login"}
            name="Login"
            drawerFunction={drawerFunction}
            icon={<VpnKey fontSize="medium" sx={{ color: "#0080fb" }} />}
          />
          <ListItemButtonNav
            link={"/register"}
            name="Register"
            drawerFunction={drawerFunction}
            icon={<PersonAddAlt1 fontSize="medium" sx={{ color: "#0080fb" }} />}
          />
          <ListItemButtonNav
            link={"/cart"}
            name="cart"
            drawerFunction={drawerFunction}
            icon={
              <ShoppingCartRounded
                fontSize="medium"
                sx={{ color: "#0080fb" }}
              />
            }
          />
          <ListItemButton onClick={handelLogout}>
            <ListItemIcon>
              <Logout fontSize="medium" sx={{ color: "#0080fb" }} />
            </ListItemIcon>
            <Typography variant="h6">Logout</Typography>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;
