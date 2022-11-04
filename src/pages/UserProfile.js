import React, { useEffect, useState } from "react";
import "./userProfile.css";

const UserProfile = ({ user }) => {
  const booking = user.bookings

  return (
    <div className="user-profile">
      <div className="main2">
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
          </div>
        ))}
      </div>{" "}
      <div className="profile">
        <h2>{user.username}'s Profile</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/128/709/709699.png"
          alt="Avatar"
        />
        <h1>Name: {user.username}</h1>
        <h3>Email: {user.email}</h3>
        <h4>Phone: {user.phone_number}</h4>
      </div>
    </div>
  );
};

export default UserProfile;
