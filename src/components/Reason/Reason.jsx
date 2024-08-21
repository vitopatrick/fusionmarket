import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { IconContext } from "react-icons";

const Reason = () => {
  return (
    <IconContext.Provider value={{ size: "40px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontStyle: "italics",
                  fontSize: "2rem",
                  width: { md: "90%", sm: "100%" },
                  fontWeight: "600",
                  color: "#6d28d9",
                }}
              >
                fusion market is a Self-Directed Trader’s Nerve Center
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ mr: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#f5f7fe",
                    borderRadius: 2,
                    p: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#1e532d",
                    },
                  }}
                >
                  1
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6d28d9",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  sx={{
                    color: "#404046",
                    width: { sm: "100%", md: "60%" },
                    fontWeight: "light",
                  }}
                >
                  fusionexmarket partners with professional traders around the
                  globe to provide you a hub of information, education,
                  strategy, live streams, social media ecosystsems and buy/sell
                  signals for self-directed traders and investors. Our mission
                  is to help you make better trading decisions faster.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ mr: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "#f5f7fe",
                    borderRadius: 2,
                    p: 2,
                    fontWeight: "bold",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#1e532d",
                    },
                  }}
                >
                  2
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6d28d9",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                  }}
                >
                  Our Commitment
                </Typography>
                <Typography
                  sx={{
                    color: "#404046",
                    width: { sm: "100%", md: "60%" },
                    fontWeight: "light",
                  }}
                >
                  As the popularity of trading and investing shifts from
                  institutional to individual management, we are committed to
                  creating efficient and powerful services for those who what to
                  take charge of their own trades and investments.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              alignSelf: "center",
              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <img
              src="https://fusionmarkets.com/sites/65c48ee5071d1a722c98309d/assets/667dfcde071d1a275c40ebdd/FM_Homepage_Image__1_.png"
              alt="phone"
            />
          </Box>
        </Box>
      </Container>
    </IconContext.Provider>
  );
};

export default Reason;
