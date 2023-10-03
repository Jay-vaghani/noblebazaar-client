import React, { useState } from "react";
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

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitState, setSubmitState] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit, register, formState, control } = form;
  let { errors, isDirty, isValid } = formState;

  const handelRegisterSubmit = async (formData) => {
    setSubmitState(true);
    const { data } = await axios
      .post(
        "https://noblebazaar.onrender.com/user/register",
        {
          ...formData,
          avatar: {
            public_id: "test",
            url: "test",
          },
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setSubmitState(false);
        toast.success("Register Successfully");
      })
      .catch((error) => {
        setSubmitState(false);
        if (error.response.data.message === "Duplicate email entered") {
          toast.error("Email Already Exist");
        }
        console.log(error.response.data.message);
      });

    setSubmitState(false);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(handelRegisterSubmit)}>
        <Stack alignItems={"center"} mt={10} spacing={2}>
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

export default Register;
