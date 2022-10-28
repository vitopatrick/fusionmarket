import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import Welcome from "../components/dashboard/Welcome";
import Prices from "../components/dashboard/Prices";
import TradingViews from "../components/dashboard/TradingViews";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Dashboard = () => {
  const state = useContext(ThemeContext);

  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <Welcome />
        <Prices />
        <TradingViews />
      </Layout>
    </ThemeProvider>
  );
};

export default Dashboard;
