import React, { useContext } from "react";
import Profile from "../components/account/Profile";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const Account = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <Profile />
      </Layout>
    </ThemeProvider>
  );
};

export default Account;
