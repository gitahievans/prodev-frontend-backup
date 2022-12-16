import React, { useState, useEffect } from "react";
import "./Admin.css";
import AdminLogin from "./adminLogin";
const Admin = () => {
  // const navigate = useNavigate()
  const [admin, setAdmin] = useState(() => {
    // getting stored value
    const saved = sessionStorage.getItem("User");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  useEffect(()=>{
    sessionStorage.setItem('User', JSON.stringify(admin))
  },[admin])
  return(
    <AdminLogin setAdmin={setAdmin}/>
  )
};

export default Admin;
