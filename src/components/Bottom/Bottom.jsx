import React from "react";
import './footer.css'
const Bottom = () => {
  return (
    <div
      className="w-100 "
      id='footer'
      style={{}}
    >
      <div className="d-flex w-100 ">
        <img
          id="image1"
          src="https://media.istockphoto.com/id/1268410371/vector/disabled-people-help-and-diversity.jpg?s=612x612&w=0&k=20&c=7I-mbaXwfVtwXvwDlm6pl9EomlWBOZiip9Wb6MxvkK0="
        />
        <img
          id="image2"
          src="https://www.reachfortraining.com.au/wp-content/uploads/2023/04/home-community-1.2-1.jpg"
        />
      </div>
      <div
        className="text-center bg-dark text-white"
        style={{ height: "100px", width:"100vw", position:"fixed",bottom:"0" }}
      >
        this is the bottom
      </div>
    </div>
  );
};
export default Bottom;
