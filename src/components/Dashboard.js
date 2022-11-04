import React from 'react'
// import NewStaff from './ NewStaff'
import NewUnit from './NewUnit'
// import UpdateUnit from './UpdateUnit'
// import './Admin.css'
import { Link } from 'react-router-dom';
const Dashboard = () => {


    function handleLogout() {
        console.log("Logged out successfully")
    }
  return (
    <div className="Admin">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <ul>
          <li>
            <Link to="/available">
              <i className="fa-solid fa-house"></i>Available Units
            </Link>
          </li>
          <li>
            <Link to="/unavailable">
              <i className="fa-solid fa-house-circle-xmark"></i>Out of Stock
            </Link>
          </li>
          <li>
            <Link to="/booked">
              <i className="fa-solid fa-money-bill-wave"></i>Booked
            </Link>
          </li>
          <li>
            <Link to="/clients">
              <i className="fa-sharp fa-solid fa-users"></i>Clients
            </Link>
          </li>
          {/* <li>
            <Link to="/newstaff">
              {" "}
              <i className="fa-sharp fa-solid fa-user-plus"></i>New Staff
            </Link>
          </li> */}
          <li>
            <Link to="">
              <button onClick={()=>handleLogout()}>Logout</button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="body-content">
        <div className="top">
          <NewUnit />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard