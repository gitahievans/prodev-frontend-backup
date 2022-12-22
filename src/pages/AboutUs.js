import React from "react";
import "../pages/about.css";

const AboutUs = () => {
  return (
    <div className="showcase">
      <div className="need">
        <div className="need-text">
          <h2>Need Storage? </h2>
          <h3>We've got you covered!</h3>{" "}
        </div>
        <img
          src="https://images.pexels.com/photos/4487361/pexels-photo-4487361.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="about-img"
          className="need-img"
        />
      </div>{" "}
      <p>
        Welcome to Storage-Centre!.We are the world’s best storage facility.We
        offer storage facilities at the best rates in town.Our facilities are
        secure with 24hr CCTV surveilance and fire proofed for any form of
        damage.We offer cold rooms, secure lock storage and ample space for any
        goods you have.BOOK WITH US NOW!!
      </p>
    </div>
  );
};

export default AboutUs;
