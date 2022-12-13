import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  // const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://storagecenter.onrender.com/login/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => console.log(data));
        navigate("/admin/dashboard");
        console.log("logged in successfull");
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="admin-login">
      <p className="error">{errors}</p>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          className="form-control"
          id="floatingInput"
          placeholder="John"
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button type="submit" id="admin-login" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Admin;
