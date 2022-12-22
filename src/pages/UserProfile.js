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

  // const book = user.bookings;
  // console.log(user);

  useEffect(() => {
    fetch("bookings")
      .then((r) => r.json())
      .then((data) => setBookings(data));
  }, []);

  // console.log(bookings.length);
  const booking = bookings.map((booking) => {
    // console.log(booking.storage_unit.image_url);
    return booking;
  });

  const handleClick = () => {
    // fetch(`https://storagecenter.onrender.com/bookings/`,

    fetch(`bookings/${booking.id}`, {
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
      } else {
        res.json().then((data) => {
          console.log(data);
          toast.error("Could not update personal details");
        });
      }
    });
  }

  return (
    <div className="user-profile">
      <div className="bookings-area">
        {bookings.length !== 0 ? (
          <>
            {" "}
            {bookings.map((booking) => (
              <div key={booking.id} className="deets">
                <img
                  src={booking.storage_unit.image_url}
                  alt="space"
                  className="space-img"
                />
                <div className="dtls">
                  <span>Unit Number: {booking.storage_unit.unit_number}</span>
                  <span>Size: {booking.storage_unit.size}</span>
                  <span>Price: {booking.storage_unit.price}</span>{" "}
                </div>
                <div className="more-details">
                  {" "}
                  <p>From: {booking.starting}</p>
                  <p>To: {booking.ending}</p>
                  <p>
                    {booking.delivery_status
                      ? "Your goods will be brough to you"
                      : "You will come pick your goods"}
                  </p>
                  <p>
                    {booking.pickup_status
                      ? "Your goods will be picked"
                      : "You will bring your goods"}
                  </p>
                </div>
                <button onClick={handleClick} className="prfl-update">
                  Remove
                </button>
              </div>
            ))}{" "}
          </>
        ) : (
          <div className="no-book">
            <h1>You have no bookings! </h1>{" "}
            <span>
              Visit our Spaces section to explore some spaces you could book
            </span>
          </div>
        )}
      </div>
      <div className="profile">
        <h2>{user.username}'s Profile</h2>
        <img
          className="prfl-avatar"
          src="https://cdn-icons-png.flaticon.com/128/5326/5326580.png"
          alt="Avatar"
        />
        <div className="lower-dtls">
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
        </div>

        {!show ? (
          <button className="prfl-update" onClick={() => setShow(true)}>
            Update profile
          </button>
        ) : (
          <button className="prfl-update" onClick={() => setShow(false)}>
            Update profile
          </button>
        )}
        {show ? (
          <div className="update-form">
            <h6 style={{ color: "blue" }}>Enter new details below</h6>
            <form action="submit" className="update-frm">
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
            <button onClick={handleSubmit} className="prfl-update">
              Update
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfile;
