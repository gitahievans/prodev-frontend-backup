import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import UserProfile from "../pages/UserProfile";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Dashboard from "./Dashboard";
import Spaces from "./Spaces";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NewStaff from "./NewStaff";
import Booked from "./Booked";
import Available from "./Available";
import Unavailable from "./Unavailable";
import Client from "./Clients";
import Admin from "./Admin";
import RentNow from "./RentNow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./ProtectedRoutes";
// import Super from "./Super";
import UpdateUnit from "./UpdateUnit";

function App() {
  const [spaceDetails, setSpaceDetails] = useState();
  const [user, setUser] = useState(false);

  const handleSpaceDetails = (params) => {
    setSpaceDetails(params);
  };

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<LoginForm user={user} setUser={setUser} />}
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route element={<ProtectedRoutes user={user} setUser={setUser} />}>
          <Route path="/UserProfile" element={<UserProfile user={user} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/spaces"
            element={<Spaces getSpaceDetails={handleSpaceDetails} />}
          />
          <Route path="/AboutUs" element={<AboutUs />} />{" "}
          <Route
            path="/rentNow"
            element={<RentNow spaceDetails={spaceDetails} />}
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/newstaff" element={<NewStaff />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="/available" element={<Available />} />
          <Route path="/unavailable" element={<Unavailable />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit" element={<UpdateUnit />} />
          {/* <Route path="/super" element={<Super />} /> */}
        </Route>
      </Routes>
      <ToastContainer closeOnClick />
    </div>
  );
}

export default App;
