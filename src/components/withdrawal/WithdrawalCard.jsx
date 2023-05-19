import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const WithdrawalCard = ({ amount, date, status, method, address, account }) => {
  return (
    <>
      <Paper>
        <Box sx={{ p: 2, mb: 3 }}>
          <Typography variant="body1" gutterBottom>
            Your Withdrawal of <b>{formatCurrency(amount)}</b> on <b>{date}</b>{" "}
            via <b>{method}</b> to this account
            <b> {method === "Bank Transfer" ? account : address},</b>
            {status}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default WithdrawalCard;
