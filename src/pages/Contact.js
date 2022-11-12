import React from "react";
import "../pages/contacts.css";
const Contact = () => {
  return (
    <div className="contacts-container">
      <div className="emails">
        <span>
          {" "}
          <strong>Emails</strong>{" "}
        </span>
        <img
          className="cnt-icns"
          src="https://cdn-icons-png.flaticon.com/128/3059/3059989.png"
          alt="email"
        />
        <p>admin@storagecenter.com</p>
        <p>hr@storagecenter.com</p>
        <p>stores.manager@storagecenter.com</p>
      </div>
      <div className="socials">
        <span>
          {" "}
          <strong>Socials</strong>{" "}
        </span>
        <img
          className="cnt-icns"
          src="https://cdn-icons-png.flaticon.com/128/7831/7831194.png"
          alt="socials"
        />
        <p>
          {" "}
          <i className="fab fa-instagram"></i> Instagram
        </p>
        <p>
          {" "}
          <i className="fab fa-facebook"></i> Facebook
        </p>{" "}
        <p>
          {" "}
          <i className="fab fa-twitter"></i> Twitter
        </p>
      </div>
      <div className="phone">
        <span>
          {" "}
          <strong>Phone</strong>{" "}
        </span>
        <img
          className="cnt-icns"
          src="https://cdn-icons-png.flaticon.com/128/3059/3059590.png"
          alt="phone"
        />
        <p>
          <span>General Manager:</span> <span>777828282</span>
        </p>
        <p>
          <span>HR:</span> <span>777828282</span>
        </p>
        <p>
          {" "}
          <span>Stores Manager:</span> <span>777828282</span>
        </p>
      </div>
      <div className="address">
        <span>
          {" "}
          <strong>Address</strong>{" "}
        </span>
        <img
          className="cnt-icns"
          src="https://cdn-icons-png.flaticon.com/128/4643/4643473.png"
          alt="location"
        />
        <p>Head Office</p>
        <span>LakeView Road</span>
        <span></span>
        <span>PSC 5 BOX 7260</span> <span>APO AE 15069-8873</span>
      </div>
    </div>
  );
};

export default Contact;
