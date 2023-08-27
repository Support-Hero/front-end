import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyclient } from "../dummy";
import Navbar from "../components/Navbar/Navbar";
import "./Client.css";
import { api } from "../api";
import Pagination, { clientSlicer } from "../components/pagination";
import Delete from "../modals/Delete";
import Create from "../modals/Create";
import Update from "../modals/Update";
import Spinner from "../components/spinner";

const Clients = () => {
  const [allClients, setAllClients] = useState();
  // after fetch clients data, replace dummyclient
  const [dummyclients, setDummyclients] = useState();

  const [name, setName] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [address, setAddress] = useState();
  const [client, setClient] = useState();

  const [clientsEachPage, setClientsEachPage] = useState();
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
  const searchClient = () => {
    // fetch single client
  };
  const fetchClients = async () => {
    // fetch data
    try {
      const res = await fetch(api + "/clients");
      const data = await res.json();
      // set all Clients
      setAllClients(data)
      // set page sliced clients
      setDummyclients(clientSlicer(data));
      // set first page clients
      setClientsEachPage(clientSlicer(data)[0]);
      // set pages
      pages(clientSlicer(data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <Navbar />
      {allClients &&
        <Create
          setAddress={setAddress}
          allclients={allClients}
          setName={setName}
          setDummyclients={setDummyclients}
          setPhonenumber={setPhonenumber}
          name={name}
          phonenumber={phonenumber}
          address={address}
        />}
      <Delete client={client} />
      <Update client={client} setName={setName} setAddress={setAddress} setPhonenumber={setPhonenumber} />
      <div className="w-75 text-start mx-auto mt-5">
        <div id="second_nav_out" className="d-flex justify-content-between ">
          <label className="fs-3">Clients</label>
          <form
            className="d-flex"
            id="client-search-form"
            onSubmit={searchClient}
          >
            <input
              className="form-control mr-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <select className="mx-1">
              <option value="-">-Select-</option>
              <option value="name">name</option>
              <option value="phone_number">phone number</option>
            </select>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="btn btn-primary "
            data-bs-toggle="modal"
            data-bs-target="#clientAddModal"
          >
            + Add New Clients
          </button>
        </div>
        <hr />
      </div>
      {
        clientsEachPage ?(
          <>
            <table className="table w-75 mx-auto">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Worker</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {clientsEachPage.map((client, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={`/clients/${client._id}`}>
                        {client.firstName}
                      </Link>
                    </td>
                    <td>{client.address}</td>
                    <td>{client.phoneNumber}</td>
                    <td>
                      <Link to={`/workers/${client._id}`}>View</Link>
                    </td>
                    <td>
                      <Link to={`/notes/${client._id}`}>Notes</Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#clientUpdateModal"
                        onClick={(e) => {
                          e.preventDefault();
                          setClient(client);
                        }}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#clientDeleteModal"
                        onClick={(e) => {
                          e.preventDefault();
                          setClient(client);
                        }}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* pagination */}
          <div className="w-75 mx-auto">

            <Pagination
              dummyclients={dummyclients}
              clientPage={clientPage}
              setClientsEachPage={setClientsEachPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            /></div>
          </>
        )
          :(
            <Spinner />
        )
      }
    </div>
  );
};
export default Clients;
