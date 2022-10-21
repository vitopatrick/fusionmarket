import {
  MdDashboard,
  MdAccountCircle,
  MdPayment,
  MdDownload,
  MdCreditScore,
  MdBusinessCenter,
  MdRecycling,
  MdHeadset,
} from "react-icons/md";

export const links = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    text: "Account Settings",
    path: "/account",
    icon: <MdAccountCircle />,
  },
  {
    text: "Fund Wallet",
    path: "/deposit",
    icon: <MdPayment />,
  },
  {
    text: "Support",
    path: "/support",
    icon: <MdHeadset />,
  },
  {
    text: "Invest",
    path: "/invest",
    icon: <MdDownload />,
  },
  {
    text: "Withdraw",
    path: "/withdraw",
    icon: <MdCreditScore />,
  },
  {
    text: "Transactions",
    path: "/transactions",
    icon: <MdBusinessCenter />,
  },
  {
    text: "Refer Users",
    path: "/refer",
    icon: <MdRecycling />,
  },
];
