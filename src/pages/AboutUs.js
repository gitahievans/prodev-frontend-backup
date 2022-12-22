import React from "react";
import "../pages/about.css";

const AboutUs = () => {
  return (
    <div className="showcase">
      <div className="need">
        <div className="about-text">
          <div className="need-txt">
            <h5 className="need-storage">Need Storage?</h5>
            <h6>We've got you covered!</h6>{" "}
          </div>
          <p>
            We are the world’s best storage facility. We offer storage
            facilities at the best rates in town.Our facilities are secure with
            24hr CCTV surveilance and fire proofed for any form of damage.
          </p>
          <p>
            Our storage facility offers convenient pick up and delivery
            services. Simply let us know what you need to store and when, and
            we'll handle the rest. Our team is dedicated to providing excellent
            service and support to make your storage experience hassle-free.
          </p>{" "}
          <p>
            We offer cold rooms, secure lock storage and ample space for any
            goods you have. BOOK WITH US NOW!!
          </p>
        </div>
        <img
          src="https://cdn.midjourney.com/f8ceb346-03d6-4bf5-95c7-85fa6dd70fb3/grid_0.png"
          alt="about-img"
          className="need-img"
        />
      </div>{" "}
    </div>
  );
};

export default AboutUs;
