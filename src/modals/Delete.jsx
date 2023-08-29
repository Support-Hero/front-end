import React from 'react'
import { api } from "../api";

const Delete = ({ client, setOpen, routeName }) => {
  const deleteClient = async (id, setOpen,routeName) => {
    // delete client
    try {
      const res = await fetch(api + routeName + id, {
        method: 'DELETE',
      });
      setOpen(false)
      // const data = await res.json();
      window.location.reload()
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteM = (client, setOpen,routeName) => (
    <div className='bg-black w-100 h-100 bg-opacity-75 pt-5' style={{ position: "absolute",top:"0", zIndex: 1 }}>
      <div className="bg-white w-50 mx-auto p-5">
        <h5 aria-label='Delete'>
          Delete
        </h5>
        <hr />
        Are you sure to delete this record?
        <div className="d-flex justify-content-md-between mt-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={e=>{
              e.preventDefault()
              setOpen(false)
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              deleteClient(client._id, setOpen,routeName);
            }}
          >
            Yes{" "}
          </button>
        </div>
      </div>

    </div>
  )
  return (
    <>
      { deleteM(client, setOpen,routeName)}
    </>)
}
export default Delete