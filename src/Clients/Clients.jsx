import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dummyclient } from "../dummy";
import Navbar from "../components/Navbar/Navbar";
import "./Client.css";
import Pagination, { clientSlicer } from "../components/pagination";

const Clients = () => {
  const [clients, setClients] = useState();
  // after fetch clients data, replace dummyclient
  const dummyclients = clientSlicer(dummyclient);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(-1);
  const [name, setName] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [address, setAddress] = useState();
  const [client, setClient] = useState();
  const [clientsEachPage, setClientsEachPage] = useState(dummyclients[0]);
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
  const fetchClients = () => {
    // fetch data
    // set Clients
    // set pages
  };
  const updateClient = () => {};
  const addnewClient = () => {
    // post data
    setClients([
      ...dummyclients,
      {
        id: dummyclients.length + 1,
        name: name,
        phonenumber: phonenumber,
        address: address,
      },
    ]);
    console.log(clients);
  };
  const deleteClient = (id) => {
    // delete client
    console.log("id", id);
  };
  useEffect(() => {
    fetchClients();
    pages(dummyclients);
  }, []);
  const addModal = (
    <div
    className="modal fade"
    id="clientAddModal"
    tabIndex="-1"
      aria-labelledby="clientAddModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form
            className="p-5"
            onSubmit={(e) => {
              e.preventDefault();
              addnewClient();
            }}
          >
            <h5 className="modal-title" id="clientAddModal">
              Add Client
            </h5>
            <hr />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="name"
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                className="form-control"
                id="name"
                aria-describedby="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">
                phone number
              </label>
              <input
                value={phonenumber}
                onChange={(e) => {
                  e.preventDefault();
                  setPhonenumber(e.target.value);
                }}
                type="phone_number"
                className="form-control"
                id="phone_number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                address
              </label>
              <input
                type="address"
                className="form-control"
                value={address}
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                id="address"
              />
            </div>
            <div className="d-flex justify-content-md-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  const deleteModal = (
    <div
      className="modal fade"
      id="clientDeleteModal"
      tabIndex="-1"
      aria-labelledby="clientDeleteModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content p-5">
          <h5 className="modal-title" id="clientDeleteModal">
            Delete Client
          </h5>
          <hr />
          Are you sure to delete this record?
          <div className="d-flex justify-content-md-between mt-3">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                deleteClient(id);
              }}
            >
              Yes{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  const updateModal = (
    <div
      className="modal fade"
      id="clientUpdateModal"
      tabIndex="-1"
      aria-labelledby="clientUpdateModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <form
            className="p-5"
            onSubmit={(e) => {
              e.preventDefault();
              updateClient();
            }}
          >
            <h5 className="modal-title" id="clientUpdateModal">
              Update Client
            </h5>
            <hr />
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                name
              </label>
              <input
                type="name"
                value={client?.name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                className="form-control"
                id="name"
                aria-describedby="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">
                phone number
              </label>
              <input
                value={client?.phone_number}
                onChange={(e) => {
                  e.preventDefault();
                  setPhonenumber(e.target.value);
                }}
                type="phone_number"
                className="form-control"
                id="phone_number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                address
              </label>
              <input
                type="address"
                className="form-control"
                value={client?.address}
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                id="address"
              />
            </div>
            <div className="d-flex justify-content-md-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <Navbar />
      {addModal}
      {deleteModal}
      {updateModal}
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
      {clients ? (
        <>rfetched data</>
      ) : (
        <>
          <table className="table w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">Id</th>
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
                  <th scope="row">{client.id}</th>
                  <td>
                    <Link to={`/clients/${client.id}`}>{client.name}</Link>
                  </td>
                  <td>{client.address}</td>
                  <td>{client.phone_number}</td>
                  <td>
                    <Link to={`/workers/${client.id}`}>View</Link>
                  </td>
                  <td>
                    <Link to={`/notes/${client.id}`}>Notes</Link>
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
                        setId(client.id);
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
          <Pagination dummyclients={dummyclients} clientPage={clientPage} setClientsEachPage={setClientsEachPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      )}
    </div>
  );
};
export default Clients;
