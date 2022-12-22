import React from "react";
import "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import "./home.css";
import "../pages/footer.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/spaces");
  };
  return (
    <>
      <div className="About-section">
        <div className="about">
          <h2 className="title">Welcome to Storage-Centre! </h2>{" "}
          <h4>We are the world’s best storage facility.</h4>
          <p className="about-text ">
            We offer storage facilities at the best rates in town. Our
            facilities are secure with 24hr CCTV surveilance and fire proofed
            for any form of damage.We offer cold rooms, secure lock storage and
            ample space for any goods you have. BOOK WITH US NOW!!
          </p>
          <button
            onClick={handleClick}
            id="need-btn"
            className="btn btn-primary"
          >
            Explore
          </button>
        </div>
        <img
          className="hero-image"
          src="https://cdn.midjourney.com/60fa8de3-e6a5-4643-a5e0-e569146833c2/grid_0.png"
          alt=""
        />
      </div>
      <AboutUs />
      <Contact />
      <footer>
        <p>
          Copyright <i className="fa-solid fa-copyright"></i>
          2022 StorageCenter, Inc
        </p>
        <p>Terms of service</p>
        <p>Privacy policy</p>
      </footer>
    </>
  );
}

export default Home;
