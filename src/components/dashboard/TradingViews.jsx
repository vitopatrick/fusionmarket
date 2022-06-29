import { Box, Typography } from "@mui/material";
import React from "react";
import { AdvancedChart, SymbolOverview } from "react-tradingview-embed";

const TradingViews = () => {
  return (
    <div>
      <Box>
        <SymbolOverview
          widgetProps={{
            symbols: [
              ["Bitcoin", "BINANCE:BTCUSDT|1D"],
              ["Litecoin", "COINBASE:LTCUSD|1D"],
              ["Cardano", "COINBASE:ADAUSD|1D"],
            ],
          }}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <AdvancedChart
          widgetProps={{
            theme: "dark",
            height: "500px",
            allow_symbol_change: "true",
          }}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" textAlign="center">
          fidelity-market © 2022
        </Typography>
      </Box>
    </div>
  );
};

export default TradingViews;
