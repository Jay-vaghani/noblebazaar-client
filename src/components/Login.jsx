import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import toast, { Toaster } from "react-hot-toast";

import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitState, setSubmitState] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, register, formState, control } = form;
  const { errors, isDirty, isValid, isSubmitting } = formState;

  const handelLoginSubmit = async (formData) => {
    setSubmitState(true);

    const { data } = await axios
      .post(
        "https://noblebazaar.onrender.com/user/login",
        { ...formData },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setSubmitState(false);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        setSubmitState(false);
        toast.error(error.response.data.message);
        console.log(error);
      });


  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(handelLoginSubmit)}>
        <Stack alignItems={"center"} mt={10} spacing={2}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "EMAIL IS INVALID",
                  },
                  required: {
                    value: true,
                    message: "EMAIL IS REQUIRED",
                  },
                })}
                error={errors.email ? true : false}
                id="email"
                helperText={errors.email?.message}
                type="text"
                fullWidth={true}
                label="Email"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                {...register("password", {
                  required: {
                    value: true,
                    message: "PASSWORD IS REQUIRED",
                  },
                })}
                helperText={errors.password?.message}
                error={errors.password ? true : false}
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
              <LoadingButton
                disabled={!isDirty || !isValid || submitState}
                type="submit"
                loading={submitState}
                loadingPosition="end"
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#003aff" }}
              >
                login
              </LoadingButton>
            </Grid>
          </Grid>
        </Stack>
      </form>
      <Toaster />
    </>
  );
}

export default Login;
