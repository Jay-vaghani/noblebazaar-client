import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Cart,
  Home,
  Login,
  NavBar,
  Orders,
  Profile,
  Register,
  ScrollTop,
} from "./components";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <NavBar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Box>
      <ScrollTop />
    </Box>
  );
}

export default App;
