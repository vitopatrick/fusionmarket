import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Paper, Typography } from "@mui/material";
import { test } from "./test";

const Testimony = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Slider {...sliderSettings}>
        {test.map((t) => (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
            key={t.id}
          >
            <Box>
              <Box sx={{ width: { xs: "10%", md: "6%" } }}>
                <img src={t.img} alt="" />
              </Box>
              <Typography
                textAlign="center"
                sx={{ fontWeight: "bold" }}
                component="h1"
                variant="h6"
              >
                {t.person}
              </Typography>
              <Typography
                textAlign="center"
                sx={{ fontWeight: "bold" }}
                component="p"
                variant="body1"
                gutterBottom
              >
                {t.position}
              </Typography>
              <Typography textAlign="center" component="p" variant="subtitle1">
                {t.testimony}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimony;
