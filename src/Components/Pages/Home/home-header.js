import React from "react";
import banner from "../../../images/Home/banner.webp";
import banner1 from "../../../images/Home/banner1.jpg";
import "./home.css";

function HomeHeader() {
  return (
    <div className="position-relative header">
      <picture>
      <source media="(max-width:768px)" srcSet={banner1} />
      <img src={banner} alt="Banner" width="100%" />
      </picture>
      <div className="banner-heading-box" >
        <div className="banner-heading">CUSTOM </div>
        <div className="banner-heading text-decoration-underline">T-SHIRTS</div>
        <div className="mt-3" >The easy way to design custom gear for your
business, school, or event</div>
<button className="header-btn">Start Printing</button>
      </div>
    </div>
  );
}

export default HomeHeader;
