import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import "./home.css";

function Home({ getSpaceDetails }) {
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/storage_units")
      .then((r) => r.json())
      .then((data) => setContent(data));
  }, []);

  function handleClick(params) {
    getSpaceDetails(params);
    navigate("/rentNow");
  }
  return (
    <>
      <div className="About-section">
        <img
          src="https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="person"
          className="about-img"
        />
        <div className="about">
          <h1 className="title">
            Welcome to Storage-Centre! We are the world’s best storage facility.
          </h1>
          <p className="about-text ">
            We offer storage facilities at the best rates in town. Our
            facilities are secure with 24hr CCTV surveilance and fire proofed
            for any form of damage.We offer cold rooms, secure lock storage and
            ample space for any goods you have. BOOK WITH US NOW!!
          </p>
        </div>
      </div>
      <AboutUs />
      <Contact />
    </>
  );
}

export default Home;
