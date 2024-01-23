import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import ProtectRoute from "./components/protectedRoute/protectRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route
          path="/"
          element={<ProtectRoute path="/dashboard" component={Dashboard} />}
        /> */}
        {/* <Route path="/" element={<ProtectRoute />} /> */}
        <Route
          path="/"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
