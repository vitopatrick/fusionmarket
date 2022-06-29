/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Reason from "../components/Reason/Reason";
import Plan from "../components/Plan/Plan";
import Testimonials from "../components/Testimonials/Testimonials";
import Questions from "../components/faq/Questions";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    const script = document.createElement("script");
    (script.async = true),
      (script.src = "//code.jivosite.com/widget/kcPDlcDu6W");
    document.body.append(script);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <About />
      <Reason />
      <Plan />
      <Testimonials />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default Home;