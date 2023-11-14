import React, { useMemo, useState } from "react";
import { SendRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../authenticationApi";
import { useDispatch } from "react-redux";
import { setUser } from "../authenticationSlice";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit, register, formState } = form;
  let { errors, isDirty } = formState;

  const [registerUser, { data, isLoading, isSuccess, error, isError }] =
    useRegisterUserMutation();

  const memorizeNotification = useMemo(() => {
    isSuccess ? toast.success("Login Successful") : "";
    isError ? toast.error(error.data.message) : "";
  }, [isSuccess, isError]);

  if (isSuccess) {
    dispatch(setUser(data));
    navigate("/");
  }

  const handelRegisterSubmit = async (formData) => {
    registerUser({
      ...formData,
      avatar: {
        public_id: "Test",
        url: "Test",
      },
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(handelRegisterSubmit)}>
        <Stack alignItems={"center"} mt={15} spacing={2}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                {...register("name", {
                  required: {
                    value: true,
                    message: "NAME IS REQUIRED",
                  },
                })}
                error={errors.name ? true : false}
                id="name"
                helperText={errors.name?.message}
                type="text"
                fullWidth={true}
                label="Full Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
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
            Already have Account{" "}
            <Link to={"/login"} style={{ color: "#0080fb" }}>
              Login
            </Link>
          </Typography>
        </Stack>
      </form>
    </>
  );
}

export default Register;
