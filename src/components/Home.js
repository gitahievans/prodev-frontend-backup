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
        <img
          src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="person"
          className="about-img"
        />
        <div className="about">
          <h1 className="title">
            Welcome to Storage-Centre!{" "}
            <h2>We are the world’s best storage facility.</h2>
          </h1>
          <p className="about-text ">
            We offer storage facilities at the best rates in town. Our
            facilities are secure with 24hr CCTV surveilance and fire proofed
            for any form of damage.We offer cold rooms, secure lock storage and
            ample space for any goods you have. BOOK WITH US NOW!!
          </p>
        </div>
        <button onClick={handleClick} id="need-btn" className="btn btn-primary">
          Explore
        </button>
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
