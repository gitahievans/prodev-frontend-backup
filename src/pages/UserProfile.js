import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./userProfile.css";

const UserProfile = ({ user }) => {
  const booking = user.bookings;

  const handleClick = () => {
    fetch(`bookings/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      toast.success("Booking removed successfully");
    });
  };

  return (
    <div className="user-profile">
      <div className="bookings-area">
        {booking.map((book) => (
          <div key={book.id} className="deets">
            <p>{book.start}</p>
            <p>{book.end}</p>
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
        <button id="prfl-update" className=" btn btn-primary">
          Update profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
