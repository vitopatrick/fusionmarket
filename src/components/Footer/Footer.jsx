import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import moment from "moment";
import "./footer.css";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "#f4f4f4", size: "2.4rem" }}>
      <footer className="footer">
        <div className="container d-flex flex-column">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column">
              <h3>About Us</h3>
              <p>
                We provide you lasting Business investment options ranging from
                cryptocurrencies, CFDs and other derivatives on forex to
                registered users across the globe anytime, anywhere so as to
                lift the future of crypto currency and digital banking with zero
                cost.
              </p>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 d-flex flex-column mb-3">
              <h3>Quick Links</h3>
              <Link to="/" className="text-white my-1 text-sec">
                Home
              </Link>
              <Link to="/about" className="text-white my-1 text-sec">
                About
              </Link>
              <Link to="/contact" className="text-white my-1 text-sec">
                Contact
              </Link>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-column mb-5">
              <h3>Contact Info</h3>
              <p>support@fidelityMarket.com</p>
              <p>Atlanta,Georgia United States</p>
            </div>
          </div>
          {/* <div className="footer__links">
            <div className="footer__media">
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
            </div>
            <div className="footer__media">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </div>
            <div className="footer__media">
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div> */}
          <div className="text-center mt-3">
            <p>
              COPYRIGHT © RESVERED Fidelity-Market 2014 -{" "}
              {moment(new Date()).format("YYYY")}
            </p>
          </div>
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
