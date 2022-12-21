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
      <div class="custom-shape-divider-top-1671614062">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutUs;
