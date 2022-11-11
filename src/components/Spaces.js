import React from "react";

function Spaces() {
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
