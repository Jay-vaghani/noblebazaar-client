import React, { memo, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../authenticationApi";

import { SendRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../authenticationSlice";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitState, setSubmitState] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
  })

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, register, formState } = form;
  const { errors, isDirty, isValid, isSubmitting } = formState;

  const [loginUser, { data, isError, isLoading, isSuccess, status, error }] =
    useLoginUserMutation();

  const memorizeNotification = useMemo(() => {
    isSuccess ? toast.success("Login Successful") : "";
    isError ? toast.error(error.data.message) : "";
  }, [isSuccess, isError]);

  if (isSuccess) {
    dispatch(setUser(data.user));
    navigate("/");
  }

  const handelLoginSubmit = async (formData) => {
    loginUser(formData);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(handelLoginSubmit)}>
        <Stack alignItems={"center"} mt={15} spacing={2}>
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
                        <Visibility sx={{ color: "#0080fb" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#0080fb" }} />
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
                disabled={!isDirty}
                type="submit"
                loading={isLoading}
                loadingPosition="end"
                endIcon={<SendRounded />}
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#0080fb" }}
              >
                login
              </LoadingButton>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            textAlign={"center"}
            textTransform={"uppercase"}
            mt={3}
          >
            Don't Have Account yet{" "}
            <Link to={"/register"} style={{ color: "#0080fb" }}>
              Register
            </Link>
          </Typography>
        </Stack>
      </form>
    </>
  );
}

export default memo(Login);
