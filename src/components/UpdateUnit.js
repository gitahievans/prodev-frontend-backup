import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const UpdateUnit = ({id}) => {

  const [state, setState] = useState({
    name: "",
    size: "",
    price: "",
    image_url: "",
    status: "",
  });

  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);

    fetch("https://storagecenter.onrender.com/storage_units", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...state }),
    }).then((res) => {
      if (res.created) {
        navigate("/");
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="edit-unit">
        <h1>Edit Unit</h1>
        <p className="error">{errors}</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Unit Name
          </label>
          <input
            type="number"
            name="name"
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image Url
          </label>
          <input
            type="text"
            name="image_url"
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Unit Price
          </label>
          <input
            type="text"
            name="price"
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <label htmlFor="size">Size:</label>
        <select name="size" onChange={onChange} id="cars">
          <option value=""></option>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
        <br></br>

        <label htmlFor="cars">is it Available:</label>
        <select name="status" onChange={onChange} id="cars">
          <option value=""></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUnit