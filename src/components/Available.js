import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import UpdateUnit from "./UpdateUnit";
const Available = () => {
  const [units, setUnits] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch("/storage_units")
      .then((r) => r.json())
      .then((data) => setUnits(data));
  }, []);
console.log(units)
  function handleShow() {
    // setShow(() => !show);
    // console.log(show);
    <Navigate to="/edit" />;
    console.log("redirecting to edit")
  }

  function handleDelete(item) {
    console.log(item.id);
    fetch(`storage_units/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Unit id</th>
            <th scope="col">Unit Number</th>
            <th scope="col">Unit Size</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {units
          .filter((unit) => unit.status === true)
          .map((unit) => (
            <tbody>
              <tr>
                <th scope="row">{unit.id}</th>
                <td>{unit.name}</td>
                <td>{unit.size}</td>
                <td>{unit.price}</td>
                <td>price</td>
                <td>
                  <button className="btn btn-primary" onClick={handleShow()}>
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={handleDelete(unit)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Available;
