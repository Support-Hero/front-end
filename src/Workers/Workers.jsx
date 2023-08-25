import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { dummyworkers } from "../dummy";
import { api } from "../api";
import Navbar from "../components/Navbar/Navbar";
const Workers = () => {
  const [workers, setWorkers] = useState();
  const fetchworkers = async () => {
    await fetch(api + "/workers")
      .then((res) => {
        // setWorkers(res.data)
        console.log("workers", res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="w-75 text-start mx-auto mt-5">
        <div className="d-flex justify-content-between">
          <label className="fs-3">Workers</label>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button className="btn btn-primary">+ Add New Worker</button>
        </div>
        <hr />
      </div>
      {workers ? (
        <>rfetched data</>
      ) : (
        <>
          <table className="table w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Clients</th>
              </tr>
            </thead>
            <tbody>
              {dummyworkers.map((worker, index) => (
                <tr key={index}>
                  <th scope="row">{worker.id}</th>
                  <td>{worker.name}</td>
                  <td>{worker.email}</td>
                  <td>{worker.phone_number}</td>
                  <td><Link to="#">View</Link></td>
                  <td><Link to="#">Update</Link></td>
                  <td><Link to="#">x</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default Workers;
