import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { api } from "../api";
import { useParams } from "react-router-dom";
import Spinner from '../components/spinner'

const Client = () => {
  const { id } = useParams();
  const [client, setClient] = useState();
  const fetchClient = async (id) => {
    // fetch data
    try {
      const res = await fetch(api + "/clients/" + id);
      const data = await res.json();
      console.log("id", data);
      // set Client
      setClient(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchClient(id);
  }, []);
  return (
    <div>
      <Navbar />
      {client ? (
        <div className="w-75 text-start mx-auto mt-5">
          <label className="fs-3">Clients</label>
          <hr />
          <div className="container">
            <div className="row fs-3">Detail</div>
            <div className="row  py-3">
              <div class="col-2">Name :</div>
              <div class="col-2">
                {client.firstName} {client.lastName}
              </div>
              <div class="col-3">contact number :</div>
              <div class="col-2">{client.phoneNumber}</div>
            </div>
            <div className="row border-bottom py-3">
              <div class="col-2">address :</div>
              <div class="col-2">{client.address}</div>
            </div>
            <div className="row fs-3 pt-3">Care Plans</div>
            <div className="row py-3">
              <div class="col">plan.pdf</div>
              <div class="col">
                <button>Upload</button>
              </div>
            </div>
            <div className="row border-bottom py-3">
              <div class="col ">Progress Notes :</div>
              <div class="col">
                <button>view all</button>
              </div>
            </div>
            <div className="row border-bottom py-3">
              <div className="d-flex flex-column">
                {client.clientNotes.map((note, index) => (
                  <div>
                    <p className="text-success"> Date: {note.date}</p>
                    <p>
                      <label className="text-secondary">Goals:</label>{" "}
                      {note.goals}
                    </p>
                    <p>
                      <label className="text-secondary">Presentations: </label>{" "}
                      {note.presentation}
                    </p>
                    <p>
                      <label className="text-secondary">Actions: </label>{" "}
                      {note.actions}
                    </p>
                    <p>
                      <label className="text-secondary">Outcome: </label>{" "}
                      {note.outcome}
                    </p>
                    <p>
                      <label className="text-secondary">FollowUp: </label>
                      {note.followUp}
                    </p>
                    <p>
                      <label className="text-secondary">FollowUpNotes: </label>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="row fs-3 py-3">Support Worker Team</div>
            <div className="row border-bottom py-3">
              <div className="d-flex">
                {client.assignedWorkers.map((worker, index) => (
                  <div className="d-flex flex-column align-items-center px-5">
                    <div className="rounded-circle bg-success mb-2" style={{width:"65px",height:"65px",objectFit:"cover"}} />
                    <label>
                      {worker.firstName}
                      {worker.lastName}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Client;
