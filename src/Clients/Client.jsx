import React from "react";
import Navbar from "../components/Navbar/Navbar";

import { useParams } from "react-router-dom";

const Client = () => {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="w-75 text-start mx-auto mt-5">
        <label className="fs-3">Clients</label>
        <hr />
        <div className="container">
          <div className="row fs-3">Detail</div>
          <div className="row border-bottom py-3">
            <div class="col">Name :</div>
            <div class="col">name</div>
            <div class="col">contact number :</div>
            <div class="col">12335346546</div>
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
              <button>view</button>
            </div>
          </div>
          <div className="row fs-3 py-3">Support Worker Team</div>
          <div className="row py-3">
            <div class="col">Team Leader</div>
            <div class="col">leader name</div>
          </div>
          <div className="row border-bottom py-3">
            <div class="col">Team members</div>
            <div class="col">member1, member2, member3 name</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Client;
