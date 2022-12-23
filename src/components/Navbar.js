import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`https://storagecenter.onrender.com/clients/${user.id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/login");
        localStorage.removeItem("User");
        toast.success("Logged out successfully");
      }
    });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="navbar-logo">
          <p>
            <span className="storage">STORAGE</span>
            <span className="center">CENTER</span>
          </p>
        </Link>
      </div>
        <div className="nav-items">
          <li>
            <Link to="./">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="./spaces">Spaces</Link>
          </li>
          <li>
            <Link to="./UserProfile">Profile</Link>{" "}
          </li>
          <li>
            {user ? (
              <Link to="/admin">
                Admin
              </Link>
            ) : null}
          </li>
          <li>
            {user ? null : (
              <Link to="/signup" className="logout">
                Signup
              </Link>
            )}
          </li>
          <li>
            {user ? (
              <button type="submit" onClick={handleClick} className="logout">
                Logout
              </button>
            ) : null}
          </li>
        </div>
      </div>
    
  );
}

export default Navbar;
