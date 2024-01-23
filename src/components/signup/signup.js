import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    await axios
      .post("http://localhost:8000/auth/signUp", user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <h1>SignUp</h1>
          <div className="input-field-card">
            <input
              type="text"
              placeholder="Email"
              className="input-field"
              value={user.email}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
              type="text"
              placeholder="Password"
              className="input-field"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              type="text"
              placeholder="Re-Enter the Password"
              className="input-field"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
