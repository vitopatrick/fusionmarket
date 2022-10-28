import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import WalletAddress from "../components/wallets/WalletAddress";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Wallets = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <WalletAddress />
      </Layout>
    </ThemeProvider>
  );
};

export default Wallets;
