import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./spaces.css";

function Spaces({ getSpaceDetails }) {
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch("https://storagecenter.onrender.com/storage_units")
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
      {" "}
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

export default Spaces;
