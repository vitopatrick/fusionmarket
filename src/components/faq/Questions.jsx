import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { faqs } from "./faqs";

const Questions = () => {
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container>
          <Typography
            textAlign="center"
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <Typography textAlign="center" variant="body1" component="p">
            Our goal is to simplify investing so that anyone can be an investor.
            With this in mind, we hand-pick the investments we offer on our
            platform.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ mt: 4, mb: 4 }}>
        {faqs.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography sx={{ fontWeight: "bold" }}>{faq.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.about}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};

export default Questions;
