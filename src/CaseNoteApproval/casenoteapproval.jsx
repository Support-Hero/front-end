import React, { useState } from 'react';
import { dummyNotes } from '../dummy';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const CaseNoteApproval = () => {
  const [notes, setNotes] = useState();
  const [selectedNote, setSelectedNote] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const searchNote = () => {};
  
  const approveNote = (id) => {
    console.log(`Note with id ${id} is approved`);
    setConfirmationMessage(`Note with id ${id} is approved`);
  };
  
  const rejectNote = (id) => {
    console.log(`Note with id ${id} is rejected`);
    setConfirmationMessage(`Note with id ${id} is rejected`);
  };

  const viewNoteDetails = (note) => {
    setSelectedNote(note);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-0">
        <div id="second_nav_out" className="d-flex justify-content-between">
          <label className="fs-3">Case Note Approval</label>
          <form className="d-flex" id="manager-search-form" onSubmit={searchNote}>
            <input className="form-control mr-1" type="search" placeholder="Search" aria-label="Search" />
            <select className="mx-1">
              <option value="-">-Select-</option>
              <option value="author">Author</option>
              <option value="client">Client</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <hr />
      </div>
      {confirmationMessage && 
        <div className={`alert mt-3 ${confirmationMessage.includes('approved') ? 'alert-success' : 'alert-danger'}`}>
          {confirmationMessage}
        </div>
      }
      {notes ? (
        <>Notes fetched for approval</>
      ) : (
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
              <th scope="col">Client</th>
              <th scope="col">Goals</th>
              <th scope="col">Follow-up</th>
              <th scope="col">Action</th>
              <th scope="col">View Entry</th>
            </tr>
          </thead>
          <tbody>
            {dummyNotes.map((note, index) => (
              <tr key={index}>
                <th scope="row">{note.id}</th>
                <td>{note.author}</td>
                <td>{note.date}</td>
                <td>{note.client_id}</td>
                <td>{note.goals.slice(0, 30)}...</td>
                <td><Link to="#">{note.followUp}</Link></td>
                <td>
                  <button className="btn btn-success" onClick={() => approveNote(note.id)}>Approve</button>
                  <button className="btn btn-danger ml-2" onClick={() => rejectNote(note.id)}>Reject</button>
                </td>
                <td>
                  <button className="btn btn-info" onClick={() => viewNoteDetails(note)}>View Entry</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {selectedNote && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Note Details</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedNote(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>ID:</strong> {selectedNote.id}</p>
                <p><strong>Author:</strong> {selectedNote.author}</p>
                <p><strong>Date:</strong> {selectedNote.date}</p>
                <p><strong>Client:</strong> {selectedNote.client_id}</p>
                <p><strong>Goals:</strong> {selectedNote.goals}</p>
                <p><strong>Presentation:</strong> {selectedNote.presentation}</p>
                <p><strong>Actions:</strong> {selectedNote.actions}</p>
                <p><strong>Outcome:</strong> {selectedNote.outcome}</p>
                <p><strong>Follow-up:</strong> {selectedNote.followUp}</p>
                <p><strong>Follow-up Note:</strong> {selectedNote.followUpNote}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={() => { approveNote(selectedNote.id); setSelectedNote(null); }}>Approve</button>
                <button type="button" className="btn btn-danger" onClick={() => { rejectNote(selectedNote.id); setSelectedNote(null); }}>Reject</button>
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedNote(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseNoteApproval;
