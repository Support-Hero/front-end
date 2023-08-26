import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {  dummyworker } from "../dummy";
import { api } from "../api";
import Navbar from "../components/Navbar/Navbar";
import Pagination, { clientSlicer } from "../components/pagination";


const Workers = () => {
  const [workers, setWorkers] = useState();
  // after fetch workers data, replace dummyclient
  const dummyworkers = clientSlicer(dummyworker);

  const [workersEachPage, setWorkersEachPage] = useState(dummyworkers[0]);
  const [currentPage, setCurrentPage] = useState(1);
  // page default be [1], then fetch clients data and setPage
  const [clientPage, setClientPage] = useState([1]);

  const pages = (dummyclients) => {
    const n = [];
    for (let i = 1; i <= dummyclients.length; i++) {
      n.push(i);
    }
    setClientPage(n);
  };

  const fetchworkers = async () => {
    // await fetch(api + "/workers")
    //   .then((res) => {
    //     // setWorkers(res.data)
    //     console.log("workers", res.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  useEffect(()=>{
    fetchworkers()
    pages(dummyworkers)
  },[])
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
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {workersEachPage.map((worker, index) => (
                <tr key={index}>
                  <th scope="row">{worker.id}</th>
                  <td>{worker.name}</td>
                  <td>{worker.email}</td>
                  <td>{worker.phone_number}</td>
                  <td><Link to="#">View</Link></td>
                  <td><Link to={`/notes/${worker.id}`}>View_notes</Link></td>
                  <td><Link to="#">Update</Link></td>
                  <td><Link to="#">x</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination dummyclients={dummyworkers} clientPage={clientPage} setClientsEachPage={setWorkersEachPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </>
      )}
    </div>
  );
};
export default Workers;
