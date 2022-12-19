import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { toast } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";

function LoginPage({ user, setUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("https://storagecenter.onrender.com/login/client",
    setIsLoading(true);
    fetch("login/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
      }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((data) => setUser(data));
        console.log("this is the user", user);
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
    <>
      <div className="login-container">
        {isLoading ? (
          <InfinitySpin width="200" color="#4fa94d" className="spinner" />
        ) : (
          <div className="login-form">
            <h2 className="logn">
              <span>Storagecenter</span> | <span>Login</span>{" "}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="user-name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Username"
                  className="form-control"
                  id="floatingInput"
                />{" "}
                <label htmlFor="floatingInput">Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  className="form-control"
                  id="floatingInput"
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </form>
            <div id="already-sign">
              <p className="already">Don't have an account?</p>
              <NavLink className="back-to-signup" to="/signup">
                Signup
              </NavLink>
            </div>
          </div>
        )}
      </div>
      )
    </>
  );
}

export default LoginPage;
