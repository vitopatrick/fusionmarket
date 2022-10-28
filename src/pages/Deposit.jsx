import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import DepositComponent from "../components/deposit/DepositComponent";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Deposit = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <DepositComponent />
      </Layout>
    </ThemeProvider>
  );
};

export default Deposit;
