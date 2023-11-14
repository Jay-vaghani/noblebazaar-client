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
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.auth.user);
  // console.log(user);

  const user = true;

  return (
    <Box>
      <Toaster />

      <NavBar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={<Profile />}
                isAuthenticated={user ? true : false}
              />
            }
          />
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
