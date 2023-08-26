import React, { useState } from "react";
import { dummyNotes } from "../dummy";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const NotesRecord = () => {
  const [notes, setNotes] = useState();
  const searchNote=()=>{}
  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-0">
        <div id="second_nav_out" className="d-flex justify-content-between ">
          <label className="fs-3">Note Records</label>
          <form
            className="d-flex"
            id="client-search-form"
            onSubmit={searchNote}
          >
            <input
              className="form-control mr-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <select className="mx-1">
              <option value="-">-Select-</option>
              <option value="author">author</option>
              <option value="client">client</option>
            </select>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          
        </div>
        <hr />
      </div>
      {notes ? (
        <>notessss fetched</>
      ) : (
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
              <th scope="col">Client</th>
              <th scope="col">Goals</th>
              <th scope="col">followUpr</th>
              <th scope="col">followUpNote</th>
            </tr>
          </thead>
          <tbody>
            {dummyNotes.map((note, index) => (
              <tr key={index}>
                <th scope="row">{note.id}</th>
                <td>{note.author}</td>
                <td>{note.date}</td>
                <td>{note.client_id}</td>
                <td>{note.goals.slice(0,30)}...</td>
                <td>
                  <Link to="#">{note.followUp}</Link>
                </td>
                <td>
                  <Link to='#'>view</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default NotesRecord;
