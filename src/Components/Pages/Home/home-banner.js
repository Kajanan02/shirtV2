import React from "react";
import Banner from "../../../images/Home/all.webp";

function HomeBanner() {
  return (
    <div className="home-banner row  align-items-center">
      <div className="col-md-6">
        <div className="text-center">
          <h2 className="banner-heading">
            Embroider Your Logo on Hundreds of Products
          </h2>
          <p className="text-center">
            Any size order. Any deadline. We've got you covered.
          </p>

          <button className="primary-btn"> Print Your Design Now ! !</button>
        </div>
      </div>
      <div className="col-md-6">
        <img src={Banner} alt="Print Banner" className="home-banner-img"/>
      </div>
    </div>
  );
}

export default HomeBanner;
