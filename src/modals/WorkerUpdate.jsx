import React from 'react'
const WorkerUpdate = ({ client, setFirstName,
  setLastName,
  firstName,
  lastName, email, phonenumber, setEmail, setPhonenumber, setOpen }) => {
    console.log('cloinet',client)
  const updateClient = (client, setOpen,
    firstName,
    lastName, email, phonenumber) => {

    // update client service

    //close modal
    setOpen(false)
  };
  const updateModal = (client, setFirstName,
    setLastName,
    firstName,
    lastName, email, phonenumber, setEmail, setPhonenumber, setOpen) => (
    <div className='bg-black w-100 h-100 bg-opacity-75 pt-5' style={{ position: "absolute", top: "0", zIndex: 1 }}>
      <div className="bg-white w-50 mx-auto p-5">
        <form
          className="p-5"
          onSubmit={(e) => {
            e.preventDefault();
            updateClient(client, setOpen,
              firstName,
              lastName, email, phonenumber);
          }}
        >
          <h5 >
            Update Client
          </h5>
          <hr />
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              first name
            </label>
            <input
              value={client?.firstName}
              onChange={(e) => {
                e.preventDefault();
                setFirstName(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              last name
            </label>
            <input
              value={client?.firstName}
              onChange={(e) => {
                e.preventDefault();
                setLastName(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone_number" className="form-label">
              phone number
            </label>
            <input
              value={client?.phoneNumber}
              onChange={(e) => {
                e.preventDefault();
                setPhonenumber(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              className="form-control"
              value={client?.email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-md-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={e => {
                e.preventDefault()
                setOpen(false)
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
  );
  return (
    <div>
      {updateModal(client, setFirstName,
        setLastName,
        firstName,
        lastName,email, phonenumber, setEmail, setPhonenumber, setOpen)}
    </div>)
}
export default WorkerUpdate