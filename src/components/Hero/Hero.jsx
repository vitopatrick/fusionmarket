import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  // use the react router dom hook
  const navigate = useNavigate();

  return (
    <>
      <Box
        className="hero"
        style={{
          backgroundImage: "url(/img/bg-img.jpg)",
          height: "50vh",
          position: "relative",
        }}
      >
        <Box className="hero__overlay">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              p: 2,
            }}
          >
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="h4"
                component="h1"
                textAlign="center"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Trade in the Moment
              </Typography>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="body1"
                sx={{ color: "#fff" }}
                textAlign="center"
              >
                Put your investing ideas into action with a full range of
                investments. Enjoy real benefits and rewards on Online Trade.
              </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button
                color="primary"
                variant="contained"
                endIcon={<FaChevronCircleRight />}
                sx={{ fontSize: "18px" }}
                size="large"
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
