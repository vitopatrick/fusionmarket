import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const WithdrawalCard = ({ amount, date, status, method, address }) => {
  return (
    <>
      <Paper>
        <Box sx={{ p: 2, mb: 3 }}>
          <Typography variant="body1" gutterBottom>
            Your Withdrawal of <b>${amount}</b> on <b>{date}</b> via{" "}
            <b>{method}</b> to this account
            <b> {address},</b>
            {status}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default WithdrawalCard;
