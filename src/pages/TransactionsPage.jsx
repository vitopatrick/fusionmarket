import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import TransactionTabs from "../components/transactions/TransactionsTabs";
import { ThemeProvider } from "@mui/material";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, theme } from "../theme/theme";

const TransactionsPage = () => {
  const state = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.checked ? darkTheme : theme}>
      <Layout>
        <TransactionTabs />
      </Layout>
    </ThemeProvider>
  );
};

export default TransactionsPage;
