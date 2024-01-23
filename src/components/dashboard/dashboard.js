import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
