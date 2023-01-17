import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";

import "../assets/css/homepage.css";

const Homepage = () => {
  return (
    <div id="homepage">
      <Header />
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default Homepage;
