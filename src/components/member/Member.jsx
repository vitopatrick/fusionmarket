import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Member = () => {

  const navigate = useNavigate();


  return (
    <>
      <Box
        sx={{
          width: {
            md: "91%",
            sm: "100%",
          },
          mx: "auto",
          my: 6,
          borderRadius: 2,
          padding: 3,
          position: "relative",
          backgroundColor: "#f5f3ff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            zIndex: "999",
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  bgcolor: "#ffffff",
                  display: "inline-block",
                  p: 1,
                  borderRadius: 3,
                  fontSize: ".8rem",
                  fontWeight: "bold",
                }}
              >
                START TODAY
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: "black", fontWeight: "700", my: 4 }}
              >
                Become a Member
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", my: 2, fontWeight: "100" }}
              >
                Connect with thousands of self-directed traders and investors
                through live stream, chat and social media ecosystem.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.2rem",
                  backgroundColor: "#5b21b6",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#8b5cf6",
                    color: "#fff",
                  },
                }}
                onClick={() => navigate("/auth")}
              >
                START TODAY
              </Button>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body1"
                sx={{ my: 3, fontWeight: "200", fontSize: "1rem" }}
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

export default Member;
