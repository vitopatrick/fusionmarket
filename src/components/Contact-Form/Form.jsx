import React, { useRef } from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";

const Form = () => {
  const nameRef = useRef();

  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  toast.configure();

  const sendMessage = (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !emailRef.current.value |
      !nameRef.current.value |
      !subjectRef.current.value |
      !messageRef.current.value
    ) {
      return toast("Please fill the form correctly", {
        type: "error",
        position: "bottom-center",
        theme: "colored",
      });
    } else {
      return toast.success("message sent", {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  return (
    <Container sx={{ mt: 4 }} maxWidth="sm">
      <Box>
        <Paper sx={{ p: 2 }}>
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Let us hear your complain
            </Typography>
          </Box>
          <Box>
            <TextField
              type="text"
              name="name"
              inputRef={nameRef}
              variant="filled"
              margin="normal"
              label="full Name"
              fullWidth
            />
            <TextField
              type="email"
              name="email"
              inputRef={emailRef}
              variant="filled"
              margin="normal"
              label="Enter Email"
              fullWidth
            />
            <TextField
              type="text"
              name="Subject"
              inputRef={subjectRef}
              variant="filled"
              margin="normal"
              label="Subject"
              fullWidth
            />
            <TextField
              type="text"
              name="message"
              inputRef={messageRef}
              variant="filled"
              margin="normal"
              label="Message"
              fullWidth
              multiline
            />
            <Button variant="contained" onClick={sendMessage} fullWidth>
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Form;
