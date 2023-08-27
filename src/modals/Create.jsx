import React from "react";
import { clientSlicer } from "../components/pagination";
const Create = (
  { name,
    phonenumber,
    address,
    allclients,
    setAddress,
    setName,
    setPhonenumber,
    setDummyclients }
) => {
  // create client api fetch
  const addnewClient = (
    allclients,
    setDummyclients,
    name,
    phonenumber,
    address
  ) => {
    // post data

    // set clients data
    setDummyclients(
      clientSlicer([
        ...Object.entries(allclients),
        {
          firstName: name,
          phoneNumber: phonenumber,
          address: address,
        }
      ])
    );
    // reset all input
    setName()
    setAddress()
    setPhonenumber()
  };
  const addModal = (
    name,
    phonenumber,
    address,
    allclients,
    setAddress,
    setName,
    setPhonenumber,
    setDummyclients
  ) => (
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
              addnewClient(
                allclients,
                setDummyclients,
                name,
                phonenumber,
                address
              );

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
                onClick={(e) => {
                  e.preventDefault()
                  setName()
                  setAddress()
                  setPhonenumber()
                }}
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
      {addModal(
        name,
        phonenumber,
        address,
        allclients,
        setAddress,
        setName,
        setPhonenumber,
        setDummyclients
      )}
    </div>
  );
};
export default Create;
