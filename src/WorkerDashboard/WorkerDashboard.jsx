import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Body from '../components/body/Body';
import { authcheck } from "../utilities/authcheck";
import allcontext from "../context";


const WorkerDashboard = () => {
  const users = useContext(allcontext)[0]
  const username = users.firstName+' '+users.lastName
  const workerLists = [
    {
      imsrc: "bi-person-vcard",
      bgcolor: "success",
      title: "clients",
      description: "client information, crud",
      route:"/clients"
    },
    {
      imsrc: "bi-file-earmark-medical",
      bgcolor: "secondary",
      title: "roster",
      description: "roster information, crud",
      route: "/roster"
    },
    {
      imsrc: "bi-microsoft-teams",
      bgcolor: "danger",
      title: "create note",
      description: "create note for work",
      route: "/create-notes"
    },
  ];
  authcheck()
  const bodyContent =(
    <>
      <div className="w-75 text-start mx-auto mt-5">
        Welcome, {username}
        <hr />
      
      <div
        className="w-100 d-flex flex-column justify-content-center align-items-center"
        style={{ paddingBottom: "100px" }}
      >
        {workerLists.map((list, index) => (
          <div
            className={`w-100 mt-3 border border-${list.bgcolor}`}
            key={index}
          >
            <div
              className={`d-flex justify-content-between p-2 bg-${list.bgcolor} bg-opacity-75`}
            >
              <i className={`bi ${list.imsrc} text-white fs-1`}></i>
              <Link to={list.route}>
                <label className="fs-2 text-white">{list.title}</label>
              </Link>
            </div>
            <div className="p-2 bg-secondary bg-opacity-25">{list.description}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  );

  return  <Body body={bodyContent} />;  
};

export default WorkerDashboard;
