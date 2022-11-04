import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
// import storage from "./images/Storage-PNG-Images 1.png";
import "./home.css";

function Home({ getSpaceDetails }) {
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("storage_units")
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
        />
        <div className="about">
          <h1 className="title">
            Welcome to Storage-Centre!, We are the world’s best storage facility.
            We offer storage facilities at the best rates in town.
          </h1>
          <p>
            Our facilities are secure with 24hr CCTV surveilance and fire
            proofed for any form of damage.We offer cold rooms, secure lock
            storage and ample space for any goods you have.BOOK WITH US NOW!!
          </p>
        </div>
      </div>

      <h1 className="book">Book Now</h1>
      <div className="main">
        {content.map((cont) => (
          <div
            key={cont.id}
            className="deet"
            onClick={() => {
              handleClick(cont);
            }}
          >
            <img src={cont.image_url} alt="container" />
            <div className="details">
              <p>
                <strong>SIZE:</strong> {cont.size}
              </p>
              <p>
                <strong>STATUS:</strong>{" "}
                {cont.status ? "Available" : "Unavailable"}
              </p>
            </div>
            <p id="price">
              <strong>PRICE:</strong>Ksh {cont.price} /=
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
