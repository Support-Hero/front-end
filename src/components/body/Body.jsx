import React from "react";
import Navbar from "../Navbar/Navbar";
import Bottom from "../Bottom/Bottom";
import Sidebar from "../Sidebar/Sidebar";
const Body = ({ body }) => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }} >
      <div >
        <Navbar />
        <div className="d-flex">
          <Sidebar />
          {body}
        </div>
      </div>
      <Bottom />
    </div>
  );
};
export default Body;
