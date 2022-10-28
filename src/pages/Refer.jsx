import React, { useContext } from "react";
import Referral from "../components/referrals/Referral";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Refer = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <Referral />
      </Layout>
    </ThemeProvider>
  );
};

export default Refer;
