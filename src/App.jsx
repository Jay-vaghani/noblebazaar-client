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
} from "./components";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <NavBar />
      <Box px={1.3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
