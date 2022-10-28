import React, { useContext } from "react";
import Investment from "../components/invest/Investment";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Invest = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <Investment />
      </Layout>
    </ThemeProvider>
  );
};

export default Invest;
