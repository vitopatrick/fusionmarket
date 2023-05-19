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
import React from 'react'

export const links = [
  {
    text: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard size="25px" />,
  },
  {
    text: "Account Settings",
    path: "/account",
    icon: <MdAccountCircle size="25px" />,
  },
  {
    text: "Fund Wallet",
    path: "/deposit",
    icon: <MdPayment size="25px" />,
  },
  {
    text: "Support",
    path: "/support",
    icon: <MdHeadset size="25px" />,
  },
  {
    text: "Invest",
    path: "/invest",
    icon: <MdDownload size="25px" />,
  },
  {
    text: "Withdraw",
    path: "/withdraw",
    icon: <MdCreditScore size="25px" />,
  },
  {
    text: "Transactions",
    path: "/transactions",
    icon: <MdBusinessCenter size="25px" />,
  },
  {
    text: "Refer Users",
    path: "/refer",
    icon: <MdRecycling size="25px" />,
  },
];
