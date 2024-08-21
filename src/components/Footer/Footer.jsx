import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { FaChevronRight, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#ddd6fe", p: 3 }} className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box>
              <Link to="/">
                <Box
                  sx={{
                    width: { xs: "40%" },
                  }}
                  s
                >
                  <img
                    src="https://fusionmarkets.com/sites/65c48ee5071d1a722c98309d/assets/65c4b95f071d1a64a2e06693/logo_copy.svg"
                    alt="logo"
                  />
                </Box>
                <Typography gutterBottom sx={{ my: 2, fontWeight: "bold" }}>
                  Support
                </Typography>
                <Typography sx={{ fontWeight: "200" }}>
                  support@fusionexmarket.online
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography
                sx={{
                  fontWeight: "300",
                  fontSize: "1.2rem",

                  mb: 4,
                }}
              >
                Quick Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Link
                  to="/privacy"
                  style={{
                    marginTop: "0.5rem",
                    fontWeight: "300",

                    fontSize: "0.8rem",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/auth"
                  style={{
                    marginTop: "0.5rem",
                    fontWeight: "300",

                    fontSize: "0.8rem",
                  }}
                >
                  Login
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Follow Us
                </Typography>
                <Box>
                  <FaTwitter color="#fff" style={{ marginRight: "0.4rem" }} />
                  <FaInstagram color="#fff" />
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "300", my: 2 }}>
                  Subscribe
                </Typography>
                <Box>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input"
                  />

                  <IconButton
                    sx={{
                      backgroundColor: "#0d6efd",
                      "&:hover": {
                        backgroundColor: "#0d6efd",
                      },
                    }}
                  >
                    <FaChevronRight color="#fff" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ color: "#fff", mt: 4 }} />
        <Box>
          <Typography variant="body1" textAlign="center" sx={{ mt: 5, mb: 2 }}>
            © Copyright 2022. fusionexmarket Inc.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
