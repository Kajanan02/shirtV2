import React from "react";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div>
      <div className="footer-table">
        <div className="row ms-5 m-5 mt-5 mb-0 p-5">
          <div className="col-md-4">
            <img src={logo} alt="logo" className="nav-logo"/>
          </div>

          <div className="col-md-4 text-center m-auto">
              <div className="footer-links">Home</div>
              <div className="footer-links">Service</div>
              <div className="footer-links">Design</div>
              <div className="footer-links">Contact</div>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>

      <div className="copy p-3 text-center">
        <span className="para-copy">© Copyright 2020 Kajanan</span>
      </div>
    </div>
  );
}

export default Footer;
