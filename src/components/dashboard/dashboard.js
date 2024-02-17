import React from "react";
import Header from "./header/header";
import PhotoUpload from "./photoUpload/photoUpload";
import PhotoList from "./photoList/photoList";

function Dashboard() {
  return (
    <div>
      <Header />
      <PhotoUpload />
      <PhotoList />
    </div>
  );
}

export default Dashboard;
