import React from "react";
import { Typography, Box, Divider } from "@mui/material";

const Testimonials = () => {
  return (
    <>
      <Box sx={{ mt: 12 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Testimonials
          </Typography>
          <Divider />
          <Typography variant="body1" component="p" textAlign="center">
            Don't take our word for it, here's what some of our clients have to
            say about us
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
