import React, { useEffect } from 'react'
import { useState } from 'react'

const Clients = () => {
  const[clients, setClients] = useState([])
  useEffect(() => {
    fetch("https://storagecenter.onrender.com/clients")
      .then((r) => r.json())
      .then((data) => setClients(data));
  })
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Client id</th>
            <th scope="col">Client Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        {clients.map((client) => (
            <tbody>
              <tr>
                <th scope="row">{client.id}</th>
                <td>{client.username}</td>
                <td>{client.email}</td>
                <td>{client.phone_number}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default Clients