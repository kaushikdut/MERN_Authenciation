import React from "react";
import "./header.css";

function Header() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="header">
      <h2>Header</h2>
      <div className="nav">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
