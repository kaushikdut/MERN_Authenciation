import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    await axios
      .post("http://localhost:8000/auth/login", user)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        return navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-card">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
            <button className="submit-btn" type="submit">
              Submit
            </button>
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
