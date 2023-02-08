import React, { useState } from "react";

const Super = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://storagecenter.onrender.com/login/admin");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="error">{"ors"}</p>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Super;
