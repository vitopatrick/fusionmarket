/*eslint-disable */
import React, { useEffect } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Reason from "../components/Reason/Reason";
import Testimonials from "../components/Testimonials/Testimonials";
import AboutSection from "../components/AboutSection/AboutSection";
// import Team from "../components/Team/Team";
import Member from "../components/member/Member";
import Greeting from "../components/Greeting/Greeting";

const Home = () => {
  useEffect(() => {
    // Function to load Tidio Chat
    const loadTidioChat = () => {
      const tidioScript = document.createElement("script");
      tidioScript.src = "//code.jivosite.com/widget/kLb2BvxvQ5";
      tidioScript.async = true;
      document.body.appendChild(tidioScript);
    };

    // Load Tidio Chat when component mounts
    loadTidioChat();

    // Clean up function to remove Tidio Chat when component unmounts
    return () => {
      const tidioElement = document.getElementById("tidio-chat");
      if (tidioElement) {
        tidioElement.remove();
      }
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Reason />
      <AboutSection />
      <Testimonials />
      {/* <Team /> */}
      <Member />
      <Footer />
      <Greeting />
    </>
  );
};

export default Home;


