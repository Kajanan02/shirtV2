import React from "react";

function WhyChoose() {
  return (
    <div className="text-center">
                <p className='why'>WHY <span className='choose'>CHOOSE US</span> </p>


      <div className="row">
        <div className="col-md-4">
          <div className="res-box">
            <i class="fas fa-tshirt fa-5x icons"></i>
            <p className="icon-head">HIGH QUALITY MATERIALS</p>
            <p className="icon-para">
              We use high quality, industry certified best equipments and
              materials for all our works, which will ensure all the quality you
              need in your T-shirts
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="res-box">
            <i class="fas fa-truck fa-5x icons"></i>
            <p className="icon-head">FAST FREE DELIVERY</p>
            <p className="icon-para">
              Rush deliveries are our speciality, and we never take an order
              unless we are 100% sure that we can guarantee your deadline.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="res-box">
            <i class="fas fa-money-bill-alt fa-5x icons"></i>
            <p className="icon-head">BETTER PRICING</p>
            <p className="icon-para">
              With free shipping and competitive pricing, we provide our
              high-quality products for a price and standard unmatched anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
