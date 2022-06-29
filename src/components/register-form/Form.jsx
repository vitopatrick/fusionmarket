import React, { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./form.css";
import {
  Container,
  Paper,
  Button,
  Typography,
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Form = () => {
  // control the input fields
  const [disable, setDisable] = useState(false);
  const [country, setCountry] = useState([]);

  // toast configuration
  toast.configure();
  // navigation router hook
  const navigate = useNavigate();
  // refs for form
  const firstNameRef = useRef();
  const LastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const countryRef = useRef();

  // fetch countries

  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });
      setCountry(countries);
    } catch (error) {
      setDisable(true);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !firstNameRef.current.value |
      !emailRef.current.value |
      !phoneRef.current.value |
      !passwordRef.current.value |
      !countryRef.current.value |
      !LastNameRef.current.value |
      !passwordConfirmRef.current.value
    ) {
      toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // send verification
      sendEmailVerification(user);
      // set the backdrop

      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value), {
        email: user.email,
        name: `${firstNameRef.current.value + LastNameRef.current.value}`,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        country: countryRef.current.value,
        balance: 0,
        profit: 0,
        bonus: 0,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePackages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
      });
      // toast notification
      toast.success("Welcome to Bitpay Please verify your email", {
        position: "top-center",
        theme: "colored",
      });
      // redirect user to login
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast("Email is already in use", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/weak-password") {
        toast("Password Should be Greater than six characters", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
      if (error.code === "auth/invalid-email") {
        toast("Invalid Email", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }
    }
  };

  return (
    <Box className="form">
      <Container maxWidth="sm" sx={{ pt: 4, pb: 8 }}>
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
            <Grid container columnSpacing={2} rowSpacing={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  type="text"
                  label="First Name"
                  inputRef={firstNameRef}
                  name="firstName"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  type="text"
                  label="Last Name"
                  inputRef={LastNameRef}
                  name="lastName"
                  variant="filled"
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
            <TextField
              type="email"
              label="Enter Email"
              inputRef={emailRef}
              name="email"
              variant="filled"
              margin="normal"
              fullWidth
            />
            <TextField
              type="tel"
              label="Phone Number"
              inputRef={phoneRef}
              name="telephone"
              margin="normal"
              variant="filled"
              fullWidth
            />
            <Grid container columnSpacing={2} rowSpacing={1}>
              <Grid item xs={12} md={6}>
                <TextField
                  type="password"
                  label="Password"
                  inputRef={passwordRef}
                  name="password"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  type="password"
                  label="Confirm Password"
                  inputRef={passwordConfirmRef}
                  name="confirmPassword"
                  variant="filled"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
            <FormControl
              fullWidth
              sx={{ mt: 2, mb: 4 }}
              variant="filled"
              disable={disable}
            >
              <InputLabel>Country</InputLabel>
              <Select inputRef={countryRef} label="Select Country">
                {country.map((count, index) => (
                  <MenuItem value={count.main} key={index}>
                    {count.main}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button fullWidth variant="contained" onClick={saveUser}>
              Register
            </Button>
            <Box>
              <Typography
                variant="body1"
                textAlign="center"
                gutterBottom
                component="p"
                sx={{ mt: 2 }}
              >
                Already Have An Account <Link to="/login">Login</Link>
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                gutterBottom
                component="p"
                sx={{ mt: 6, mb: 2 }}
              >
                © Copyright 2022 Fidelity-Market All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Form;
