import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Rentnow.css";

function RentNow({ spaceDetails }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [goods, setGoods] = useState("");
  const [pickupStatus, setPickupStatus] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");
  // const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  let spaceId = spaceDetails.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: startDate,
        end: endDate,
        goods: goods,
        pickup_status: pickupStatus,
        delivery_status: deliveryStatus,
        storage_unit_id: spaceId,
      }),
    }).then((res) => {
      if (res.ok) {
        toast.success("Storage unit booked successfully");
        navigate("/");
      } else {
        // res.json().then((data) => setErrors(data.error));
        toast.error("An erorr occurred");
      }
    });
  };

  return (
    <div class="bookings-container">
      <div class="booking-form">
        <div class="form-header">
          <h1 className="book-space">Book this space</h1>
        </div>
        <div key={spaceDetails.id} className="spacedetails">
          <p>
            <span className="d-names">Unit Number</span> | {spaceDetails.name}
          </p>
          <p>
            <span className="d-names">Unit Size</span> | {spaceDetails.size}
          </p>
          <p>
            <span className="d-names">Unit Price</span> | Ksh.
            {spaceDetails.price}
          </p>
          <p>
            <span className="d-names">Availability</span> |
            {spaceDetails.status === true ? "Available✅" : "Not Available ❎"}
          </p>
        </div>
        <form className="form-inputs" onSubmit={handleSubmit}>
          <label className="form-text">From</label>
          <DatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 0}
            isClearable
          />
          <label className="form-text">To</label>
          <DatePicker
            className="form-control"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 0}
            isClearable
          />
          <label className="form-text">What goods do you want to store?</label>
          <select
            className="form-control"
            id="goods"
            value={goods}
            onChange={(e) => setGoods(e.target.value)}
          >
            <option value="select">Select</option>
            <option value="residential">Residential goods</option>
            <option value="commercial">Commercial goods</option>
          </select>
          <label className="form-text">Will you need pickup?</label>
          <select
            className="form-control"
            value={pickupStatus}
            id="pickup"
            onChange={(e) => setPickupStatus(e.target.value)}
          >
            <option value="select">Select</option>{" "}
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>{" "}
          <label className="form-text">Will you need delivery?</label>
          <select
            className="form-control"
            value={deliveryStatus}
            id="delivery"
            onChange={(e) => setDeliveryStatus(e.target.value)}
          >
            <option value="select">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>{" "}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RentNow;
