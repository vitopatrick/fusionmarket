import BtcLogo from "../../img/btc.png";
import ethLogo from "../../img/eth.png";
import usdtLogo from "../../img/usdt.png";
import bankLogo from "../../img/bank.png";

export const options = [
  {
    name: "Bitcoin",
    minAmount: "$10",
    duration: "48hrs",
    icon: BtcLogo,
  },
  {
    name: "Ethereum",
    minAmount: "$10",
    duration: "48hrs",
    icon: ethLogo,
  },
  {
    name: "USDT TRC20",
    minAmount: "$10",
    duration: "48hrs",
    icon: usdtLogo,
  },
  {
    name: "Bank Transfer",
    minAmount: "$10",
    duration: "48hrs",
    icon: bankLogo,
  },
];
