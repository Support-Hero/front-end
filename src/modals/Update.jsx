import React from 'react'
const Update = ({client,setName, setAddress, setPhonenumber})=>{
    const updateClient = (client) => {
        // update client service
    };
    const updateModal =(client,setName, setAddress, setPhonenumber)=> (
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
                  updateClient(client);
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
            {updateModal(client,setName, setAddress, setPhonenumber)}
        </div>)
}
export default Update