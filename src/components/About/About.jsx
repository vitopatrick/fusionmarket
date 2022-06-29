import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { about } from "./lists";

const About = () => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 6 }}>
        <Box>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              ABOUT FIDELITY-MARKET
            </Typography>
            <Typography variant="body1" component="p" textAlign="center">
              fidelity-market is your no 1 cryptocurrency investment portfolio
              management system
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
                    }}
                  >
                    <Box sx={{ width: { xs: "10%", md: "20%" } }}>
                      <img src={about.img} alt={about.title} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="h6"
                        textAlign="center"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                      >
                        {about.title}
                      </Typography>
                      <Typography variant="body1" textAlign="center">
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
