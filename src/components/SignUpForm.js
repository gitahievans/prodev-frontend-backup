import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";
import FormInput from "./FormInput";

// import {
//   Avatar,
//   Grid,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
// import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function SignUpForm() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm_password, setConfirmPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [phone_number, setPhoneNumber] = useState(0);
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: 0,
    showPassword: false,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter your username",
      required: true,
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
      label: "Email",
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Enter your phone number",
      label: "Phone Number",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm your password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/clients", {
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
        res.json().then((errorData) => setErrors(errorData.errors));
        toast.error("Could not create account");
      }
    });
  }
  localStorage.setItem("user-info", JSON.stringify(values));

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
        <h1>Create Account</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            className="form-input"
          />
        ))}
        <button className="sign-btns" type="submit">
          Sign Up
        </button>
        <div id="already-sign">
          <p className="already">Already signed up?</p>
          <button className="sign-btns" id="signin-btn" type="submit">
            <NavLink className="signin" to="/login">
              Sign In
            </NavLink>
          </button>
        </div>
      </form>
    </div>
  );
}

// JSX
//   return (
//     <Grid>
//       <Paper elevation={20} style={paperStyle}>
//         <Grid align="center">
//           <Avatar style={{ backgroundColor: "#874aff" }}>
//             <AddCircleOutlineOutlinedIcon />
//           </Avatar>
//           <h2 style={{ margin: 0 }}>Sign Up</h2>
//           <Typography variant="caption">
//             Please fill this form to create an account!
//           </Typography>
//         </Grid>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Userame"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Enter your name"
//             variant="outlined"
//             style={{ margin: "5px" }}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             variant="outlined"
//             required
//             style={{ margin: "5px" }}
//           />
//           <TextField
//             fullWidth
//             label="Phone Number"
//             value={phone_number}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Enter your phone number"
//             variant="outlined"
//             style={{ margin: "5px" }}
//           />
//           <TextField
//             fullWidth
//             type={showPassword ? "text" : "password"}
//             // value={password}
//             // onChange={(e) => setPassword(e.target.value)}
//             label="Password"
//             variant="outlined"
//             style={{ margin: "5px" }}
//             pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{12,}$"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     onClick={handlePasswordVisibility}
//                     aria-label="toggle password"
//                     edge="end"
//                   >
//                     {showPassword ? (
//                       <VisibilityOffSharpIcon />
//                     ) : (
//                       <VisibilitySharpIcon />
//                     )}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             fullWidth
//             label="Confirm Password"
//             // value={confirm_password}
//             // onChange={(e) => setConfirmPassword(e.target.value)}
//             variant="outlined"
//             style={{ margin: "5px" }}
//             type="password"
//             pattern="password"
//           />

//           <Button type="submit" variant="contained" color="primary">
//             Sign Up
//           </Button>
//         </form>
//         <Grid>
//           <Typography variant="caption" style={{ fontSize: "15px" }}>
//             Already have an account?
//           </Typography>
//           <Button type="submit" variant="contained" color="primary">
//             <Link to="/login">Sign In</Link>
//           </Button>
//         </Grid>
//         <Grid>
//           {errors.map((err) => (
//             <Grid style={errorStyle} key={err}>
//               {err}
//             </Grid>
//           ))}
//         </Grid>
//       </Paper>
//     </Grid>
//   );
// }

export default SignUpForm;
