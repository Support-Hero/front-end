import React from "react";
import Navbar from "../Navbar/Navbar";
import Bottom from "../Bottom/Bottom";

const Body = ({ body }) => {
  return (
    <div style={{minHeight:"100vh",position: "relative" }} >
      <div >
        <Navbar />
        {body}
      </div>
      <Bottom />
    </div>
  );
};
export default Body;