/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Reason from "../components/Reason/Reason";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutSection from "../components/AboutSection/AboutSection";
import Team from "../components/Team/Team";
import Member from "../components/member/Member";
import Greeting from "../components/Greeting/Greeting";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <About />
      <Reason />
      <AboutSection />
      <Testimonials />
      <Team />
      <Member />
      <Footer />
      <Greeting />
    </>
  );
};

export default Home;