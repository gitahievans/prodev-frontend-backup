import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { toast } from "react-toastify";

function LoginPage({ user, setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
        console.log(user);
        toast.success("Login successful");
        navigate("/");
      } else {
        res.json().then((data) => {
          console.log(data.error);
          toast.error(
            "Login failed! Please check your email address and password, and then try again."
          );
        });
      }
    });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
          alt="Avatar"
          className="avatar"
        />
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="user">
            <label className="labels">Username</label>
            <input
              type="text"
              name="user-name"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Username"
            />
          </div>

          <div className="pass">
            <label className="labels">Password</label>

            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button className="sign-btns" type="submit">
            Login
          </button>
        </form>
      </div>
      <div>
        <button>
          {" "}
          <NavLink className="back" to="/">
            Back to Homepage
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
