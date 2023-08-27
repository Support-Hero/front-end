import React from 'react'
import { api } from "../api";

const Delete = (client)=>{
    const deleteClient = async(id) => {
        // delete client
        try {
          const res = await fetch(api + "/clients/"+id,{
            method: 'DELETE',
          });
          // const data = await res.json();
          window.location.reload()
        } catch (error) {
          console.error("Error:", error);
        }
      };

    const deleteModal = (client)=>(
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
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteClient(client.client._id);
                  }}
                >
                  Yes{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    return (
        <div>
            {deleteModal(client)}
        </div>)
}
export default Delete