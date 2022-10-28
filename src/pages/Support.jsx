import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import SupportCard from "../components/Support/SupportCard";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Support = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <SupportCard />
      </Layout>
    </ThemeProvider>
  );
};

export default Support;
