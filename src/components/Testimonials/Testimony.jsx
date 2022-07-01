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
          <Paper key={t.id} sx={{ p: 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Box sx={{ width: { xs: "10%", md: "5%" } }}>
                <img src={t.img} style={{ borderRadius: "50%" }} alt="" />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {t.person}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {t.position}
                </Typography>
                <Typography variant="subtitle1" textAlign="center">
                  {t.testimony}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimony;
