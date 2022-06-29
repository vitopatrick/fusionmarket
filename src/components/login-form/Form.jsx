import React, { useRef } from "react";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Paper,
} from "@mui/material";

import "../register-form/form.css";

const Form = () => {
  // navigation
  const navigate = useNavigate();
  // toast config
  toast.configure();
  // login form Ref
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    // sign in user
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // store the token in session
      sessionStorage.setItem("token", user.user.refreshToken);
      // redirect to dashboard
      toast.success("Welcome Back !!", {
        position: "top-center",
        theme: "colored",
      });
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast("Password is Incorrect", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/user-not-found") {
        toast("User Not Found", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      } else {
        sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check Your Email for a reset Link", {
          theme: "colored",
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast("Enter Recovery Mail", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <Box className="form" sx={{ p: 6 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 2 }}>
          <Box>
            <Link to="/">
              <Typography
                variant="h4"
                component="h1"
                textAlign="center"
                sx={{ fontWeight: "bold" }}
              >
                Fidelity-Market
              </Typography>
            </Link>
          </Box>
          <Box>
            <TextField
              type="email"
              name="email"
              margin="normal"
              variant="filled"
              label="Enter Email"
              fullWidth
              inputRef={emailRef}
            />
            <TextField
              type="password"
              name="password"
              margin="normal"
              variant="filled"
              label="Password"
              fullWidth
              inputRef={passwordRef}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Typography
                variant="body1"
                textAlign="center"
                gutterBottom
                component="p"
              >
                if you do not have an account{" "}
                <Link to="/register">Click Here</Link> to create one.
              </Typography>
              <Button variant="text" color="error" onClick={resetPassword}>
                Click to Here to Recover Password.
              </Button>
            </Box>
            <Button fullWidth variant="contained" onClick={loginUser}>
              Sign In
            </Button>
            <Typography
              variant="body1"
              textAlign="center"
              gutterBottom
              component="p"
              sx={{ mt: 6 }}
            >
              © Copyright 2022 Fidelity-Market All Rights Reserved.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Form;
