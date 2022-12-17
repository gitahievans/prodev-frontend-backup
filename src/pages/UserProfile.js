import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "./userProfile.css";

const UserProfile = ({ user }) => {
  const [show, setShow] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const booking = user.bookings;
  // console.log(booking);

  useEffect(() => {
    fetch("bookings")
      .then((r) => r.json())
      .then((data) => setBookings(data));
  });

  const handleClick = () => {
    // fetch(`https://storagecenter.onrender.com/bookings/`,
    fetch(`bookings/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      toast.success("Booking removed successfully");
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("https://storagecenter.onrender.com/login/client",
    fetch(`clients/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        phone_number: phoneNumber,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success(
          "Personal details updated successfully. Changes will be reflected in your next login"
        );
      }
      else{
        res.json().then((data) => {
        console.log(data);
        toast.error("Could not update personal details")
      })
    };
   }
  )}

  return (
    <div className="user-profile">
      <div className="bookings-area">
        {booking.map((book) => (
          <div key={book.id} className="deets">
            <p>From: {book.starting}</p>
            <p>To: {book.ending}</p>
            <p>
              {book.delivery_status ? "You will be picked" : "you will bring"}
            </p>
            <p>
              {book.pickup_status ? "You will be picked" : "you will bring"}
            </p>
            <img
              className="rmv-book"
              src="https://cdn-icons-png.flaticon.com/128/6096/6096937.png"
              alt="Remove"
              onClick={handleClick}
            />
          </div>
        ))}
      </div>{" "}
      <div className="profile">
        <h2>{user.username}'s Profile</h2>
        <img
          className="prfl-avatar"
          src="https://cdn-icons-png.flaticon.com/128/5326/5326580.png"
          alt="Avatar"
        />
        <p>
          Name: <span className="prfl-dtls">{user.username}</span>
        </p>
        <p>
          Email: <span className="prfl-dtls">{user.email}</span>{" "}
        </p>
        <p>
          Phone: <span className="prfl-dtls">{user.phone_number}</span>{" "}
        </p>
        <p>
          Number of bookings :{" "}
          <span className="prfl-dtls">{user.bookings.length}</span>{" "}
        </p>
        {!show ? (
          <button
            id="prfl-update"
            className=" btn btn-primary"
            onClick={() => setShow(true)}
          >
            Update profile
          </button>
        ) : (
          <button
            id="prfl-update"
            className=" btn btn-primary"
            onClick={() => setShow(false)}
          >
            Update profile
          </button>
        )}
        {show ? (
          <div className="update-form">
            <h6 style={{ color: "blue" }}>Enter your details below</h6>
            <form action="submit">
              <input
                type="text"
                name="Name"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="Email"
                className="form-control"
                id="floatingInput"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                name="phoneNumber"
                className="form-control"
                id="floatingInput"
                placeholder="Phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>
            <button onClick={handleSubmit} className=" btn btn-primary">
              Update
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfile;
