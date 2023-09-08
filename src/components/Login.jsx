import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [loginAuth, setLoginAuth] = useState({
    email: "",
    password: "",
  });

  const handelLoginSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "https://noblebazaar.onrender.com/user/login",
      { ...loginAuth },
      {
        withCredentials: true,
      }
    );

    console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handelLoginSubmit}>
        <Stack alignItems={"center"} mt={10} spacing={2}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                type="email"
                fullWidth={true}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) =>
                  setLoginAuth((prev) => {
                    return {
                      ...prev,
                      email: e.target.value,
                    };
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                onChange={(e) =>
                  setLoginAuth((prev) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  })
                }
                type={showPassword ? "text" : "password"}
                fullWidth={true}
                id="outlined-basic"
                label="password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      onClick={() => setShowPassword(!showPassword)}
                      position="end"
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ color: "#003aff" }} />
                      ) : (
                        <Visibility sx={{ color: "#003aff" }} />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#003aff" }}
              >
                login
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </form>
    </>
  );
}

export default Login;
