import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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
  const [errors, setErrors] = useState("");
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
        res.json().then((data) => setErrors(data.error));
        toast.error("An erorr occurred");
      }
    });
  };

  return (
    <div id="booking" class="section">
      <div class="section-center">
        <div class="container">
          <div class="row">
            <div class="booking-form">
              <div class="form-header">
                <h1 className="book-space">Book this space</h1>
              </div>
              <div key={spaceDetails.id} className="spacedetails">
                <p>
                  Name
                  <span className="d-names">Unit Name</span>:{" "}
                  {spaceDetails.name}
                </p>

                <p>
                  Size
                  <span className="d-names">Unit Size</span>:{" "}
                  {spaceDetails.size}
                </p>

                <p>
                  Price
                  <span className="d-names">Unit Price</span>: Ksh.
                  {spaceDetails.price}
                </p>

                <p>
                  Status
                  <span className="d-names">Availability</span>:
                  {spaceDetails.status == true
                    ? "Available✅"
                    : "Not Available ❎"}
                </p>
              </div>

              <form className="booking-form" onSubmit={handleSubmit}>
                <p className="error">{errors}</p>
                <label className="form-text">Period(dates)</label>
                <div className="">
                  <div class="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-label">From</label>
                        <DatePicker
                          className="form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                          filterDate={(date) => date.getDay() !== 0}
                          isClearable
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label class="form-label">To</label>
                        <DatePicker
                          className="form-control"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()}
                          filterDate={(date) => date.getDay() !== 0}
                          isClearable
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-text">
                        What goods do you want to store?
                      </label>
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
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
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
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-text">
                        Will you need delivery?
                      </label>
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
                      {/* <input value={spaceId} disabled /> */}
                    </div>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentNow;
