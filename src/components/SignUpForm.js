import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";

function SignUpForm() {

  const navigate = useNavigate();
  

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: 0,
    showPassword: false,
  });

  // const regex = "`^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$`";

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://storagecenter.onrender.com/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        toast.success("Account created successfully");
        navigate("/login");
      } else {
        // res.json().then((errorData) => setErrors(errorData.errors));
        toast.error("Could not create account");
      }
    });
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // Toggling password visibility
  // const handlePasswordVisibility = () => {
  //   values.showPassword ? setValues(false) : setShowPassword(true);
  // };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-title">Create Account</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="username"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            onChange={onChange}
            required
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={onChange}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>{" "}
        <div className="form-floating mb-3">
          <input
            type="number"
            name="phoneNumber"
            className="form-control"
            id="floatingPassword"
            placeholder="Phone"
          />
          <label htmlFor="floatingPassword">Phone</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="password"
            className="form-control"
            id="floatingInput"
            placeholder="Password"
            onChange={onChange}
            required
          />
          <label htmlFor="floatingInput">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            name="confirmPassword"
            className="form-control"
            id="floatingPassword"
            placeholder="Confirm password"
            required
          />
          <label htmlFor="floatingPassword">Confirm password</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Sign Up
        </button>
        <div id="already-sign">
          <p className="already">Already signed up?</p>
          <NavLink className="signin" to="/login">
            Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
