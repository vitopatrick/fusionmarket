import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { about } from "./lists";

const About = () => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 6 }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              textAlign="center"
              gutterBottom
              sx={{
                color: "#6d28d9",
                fontSize: "0.6rem",
                backgroundColor: "#f5f7fe",
                borderRadius: 2,
                p: 1,
                display: "inline-block",
              }}
            >
              FusionExMarket
            </Typography>
            <Typography
              variant="h4"
              component="p"
              textAlign="center"
              sx={{
                color: "#6d28d9",
                fontStyle: "italics",
                textDecoration: "underline",
              }}
            >
              How it Works:
            </Typography>
          </Box>
          <Container sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {about.map((about) => (
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{
                      p: { xs: 2, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      bgcolor: "#fff",
                    }}
                    elevation={0}
                  >
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="h6"
                        textAlign="center"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "#6d28d9", mb: 2 }}
                      >
                        {about.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{ color: "gray", fontWeight: "light" }}
                      >
                        {about.about}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default About;
