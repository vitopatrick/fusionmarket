import React from "react";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Greeting from "../components/Greeting/Greeting";
import Navbar from "../components/Navbar/Navbar";
import PrivacyPolicy from "../components/privacy/PrivacyPolicy";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
      <Greeting />
    </>
  );
};

export default Privacy;
