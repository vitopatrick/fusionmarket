import React from "react";
import { Box, Typography, Grid, Container, Paper } from "@mui/material";
import { IconContext } from "react-icons";
import { reasons } from "./reasons";

const Reason = () => {
  return (
    <IconContext.Provider value={{ size: "40px" }}>
      <Box sx={{ mt: 8 }}>
        <Box>
          <Box>
            <Typography
              variant="h4"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              OUR SERVICES{" "}
            </Typography>
            <Typography variant="body1" textAlign="center" gutterBottom>
              Why you should Choose us
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          {reasons.map((reason) => (
            <Grid item xs={12} md={4} key={reason.id}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Box sx={{ mt: 2, mb: 2 }}>{reason.icon}</Box>

                <Typography
                  variant="h6"
                  component="h4"
                  textAlign="center"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {reason.title}
                </Typography>
                <Typography variant="body1" textAlign="center" component="p">
                  {reason.about}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </IconContext.Provider>
  );
};

export default Reason;
