import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/about.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/spaces");
  };
  return (
    <div className="showcase">
      <div className="text">
        <h2>Need Storage? </h2>
        <h3>We've got you!</h3>
        <p>
          Welcome to Storage-Centre!.We are the world’s best storage facility.We
          offer storage facilities at the best rates in town.Our facilities are
          secure with 24hr CCTV surveilance and fire proofed for any form of
          damage.We offer cold rooms, secure lock storage and ample space for
          any goods you have.BOOK WITH US NOW!!
        </p>
        <button onClick={handleClick} className="btn btn-primary">
          Explore
        </button>
      </div>
      <div className="side-img">
        <img
          src="https://images.pexels.com/photos/4487361/pexels-photo-4487361.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="about-img"
          className="side-img"
        />
      </div>
    </div>
  );
};

export default AboutUs;
