import React from "react";

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Logout } from "@mui/icons-material";

function ListItemButtonNav({ link, name, drawerFunction, icon }) {
  return (
    <>
      <ListItemButton onClick={() => drawerFunction(link)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <Typography variant="h6">{name}</Typography>
      </ListItemButton>
    </>
  );
}

export default ListItemButtonNav;
