import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import Withdrawal from "../components/withdrawal/Withdrawal";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Withdraw = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <Withdrawal />
      </Layout>
    </ThemeProvider>
  );
};

export default Withdraw;
