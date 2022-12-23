import React, { useState } from "react";

const NewStaff = () => {

  const [values, setValues] = useState({
    username: "",
    password: "",
    email: ""
  })
  const[errors, setErrors] = useState("")

  function handleChange(e) {
    setValues({...values, [e.target.name]:e.target.value})
  }
console.log(values);

  const handleSubmit = (event) => {
    event.preventDefault()
    // fetch("https://storagecenter.onrender.com/staff", 
    fetch("https://storagecenter.onrender.com/staff", {
      method: "POST",
      headers: {
        "Content-Type": "applcation/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      if (r.created) {
        console.log("created");
      } else {
        r.json().then((err) => setErrors(err.error));
      }
    });
  }
  return (
    <form
      className="row g-3 needs-validation"
      onSubmit={handleSubmit}
    >
      <p className="error">{ errors}</p>
      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustom02" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control"
          id="validationCustom02"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-4">
        <label htmlFor="validationCustomUsername" className="form-label">
          Email
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default NewStaff;
