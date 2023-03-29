import React from "react";
import "./Footer.css";
// import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        {/*<div className="footer-box">*/}
        {/*  <h4>Useful Links</h4>*/}
        {/*  <div className="footer-links">*/}
        {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
        {/*    <a href="#">&bull; Support</a>*/}
        {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
        {/*    <a href="#">&bull; About</a>*/}
        {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
        {/*    <a href="#">&bull; Learn</a>*/}
        {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
        {/*    <a href="#">&bull; Hosting</a>*/}
        {/*    /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/*/}
        {/*    <a href="#">&bull; Messenger</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">&bull; Support</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">&bull; About</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">&bull; Learn</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">&bull; Hosting</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">&bull; Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Brobyvägen 3 B lgh 1103
              28971 Sibbhult
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +46 76 270 25 80
            </p>
            {/*<p>*/}
            {/*  <FaFax /> &nbsp; Fax: +12342762178*/}
            {/*</p>*/}
            <p>
              <FaEnvelope /> &nbsp; Email: info@Hlkatwsl.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.Hlkatwsl.com
            </p>
          </div>
        </div>
        {/*<div className="footer-box">*/}
          {/*<img src={logo} alt="logo" />*/}
          {/*<p className="u-text-small">&copy; Copyright 2021. SocialX.com</p>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Footer;
