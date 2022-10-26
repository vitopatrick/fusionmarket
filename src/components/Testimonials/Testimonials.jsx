import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import Testimony from "./Testimony";

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
            Loved by Thousands of Traders Worldwide
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Testimonials;
