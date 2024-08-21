import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: {
            md: "100%",
            sm: "100%",
          },
          mx: "auto",
          mt: 0,
          mb: 3,
          borderRadius: 2,
          padding: 3,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h2"
                sx={{ color: "black", fontWeight: "700", my: 4 }}
              >
                Low Cost Trading for Everyone, Everywhere
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", my: 2, fontWeight: "light" }}
              >
                We're a Forex and CFD broker with $2.25 per side commission, no
                fees to deposit and no minimum account size.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.2rem",
                  backgroundColor: "#5b21b6",
                  color: "#fff",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#6d28d9",
                    color: "#fff",
                  },
                }}
                onClick={() => navigate("/auth")}
              >
                START TRADING
              </Button>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body1"
                sx={{ my: 3, fontWeight: "light", fontSize: "1rem" }}
              >
                We are currently hosted on a Discord server but will <br />
                be moving to our own App this summer.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
