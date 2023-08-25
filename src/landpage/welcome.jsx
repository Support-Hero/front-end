import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Welcome = () => {
  const lists = [
    {
      imsrc: "bi-people",
      bgcolor: "primary ",
      title: "workers",
      description: "worker information, crud",
    },
    {
      imsrc: "bi-person-vcard",
      bgcolor: "success ",
      title: "clients",
      description: "worker information, crud",
    },
    {
      imsrc: "bi-file-earmark-medical",
      bgcolor: "warning ",
      title: "rosters",
      description: "worker information, crud",
    },
    {
      imsrc: "bi-microsoft-teams",
      bgcolor: "info ",
      title: "teams",
      description: "worker information, crud",
    },
  ];
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("access") && localStorage.getItem("user")) {
      setToken(localStorage.getItem("access") )
      setUserId(JSON.parse(localStorage.getItem("user")))
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [])
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div className="w-75 text-start mx-auto mt-5">
        Welcome 
        <hr />
      </div>

      <div className="w-100 d-flex flex-column justify-content-center align-items-center ">
        {lists.map((list, index) => (
          <div
            className={`w-75  mt-3 border border-${list.bgcolor}`}
            key={index}
          >
            <div
              className={`d-flex justify-content-between  p-2 bg-${list.bgcolor} bg-opacity-75`}
            >
              <i className={`bi ${list.imsrc} text-white fs-1`}></i>
            <Link to={`/${list.title}`}> <label className="fs-2 text-white">{list.title}</label></Link> 
            </div>

            <div className="p-2 bg-secondary bg-opacity-25">{list.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Welcome;
