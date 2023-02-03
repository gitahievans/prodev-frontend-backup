import React from "react";
import "react-router-dom";
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
      <div className="about-section">
        <div className="welcome">
          <h2>
            STORAGE CENTER
            <h4>We are the world’s best storage facility.</h4>
          </h2>{" "}
          <img
            src="https://cdn.midjourney.com/4ecbed0b-b5d7-49a8-a8cc-511294d7b67d/grid_0.png"
            alt=""
          />
        </div>
        <div className="about">
          <div className="home-text ">
            <p> We offer storage facilities at the best rates in town.</p>{" "}
            <p>
              Our facilities are secure with 24hr CCTV surveilance and
              fire-proofed for any form of damage.
            </p>
            <p>
              We offer cold rooms, secure lock storage and ample space for any
              goods you have.
            </p>
            <p id="book-now">BOOK WITH US NOW!</p>
          </div>
          <button
            onClick={handleClick}
            id="need-btn"
            className="btn btn-primary"
          >
            Explore
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
