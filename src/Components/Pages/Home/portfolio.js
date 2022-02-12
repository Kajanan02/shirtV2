import React from "react";
import Img01 from "../../../images/Home/01.png";
import Img02 from "../../../images/Home/02.jpg";
import Img03 from "../../../images/Home/03.jpg";
import Img04 from "../../../images/Home/04.jpg";
import Img05 from "../../../images/Home/05.webp";
import Img06 from "../../../images/Home/06.jpg";

function Portfolio() {
  return (
    <div className="text-center">
      <p className="why">
        OUR <span className="choose">PORTFOLIO</span>{" "}
      </p>

      <div>
        <div className="row">
          <div className="col-md-4">
            <div>
              <img
                src={Img01}
                alt="T-shirt"
                className="porfolio-img-container"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={Img02}
                alt="T-shirt"
                className="porfolio-img-container"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={Img03}
                alt="T-shirt"
                className="porfolio-img-container"
              />
            </div>
          </div>
        </div>

        <div className="row porfolip-img-space">
          <div className="col-md-4">
            <div>
              <img
                src={Img04}
                alt="T-shirt"
                className="porfolio-img-container"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={Img05}
                alt="T-shirt"
                className="porfolio-img-container"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img
                src={Img06}
                alt="T-shirt"
                className="porfolio-img-container"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
