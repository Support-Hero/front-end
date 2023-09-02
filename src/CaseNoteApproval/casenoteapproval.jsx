import React, { useState, useEffect } from 'react';
import { dummyNotes } from '../dummy.js';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const CaseNoteApproval = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    setNotes(dummyNotes);
  }, []);

  const approveNote = (id) => {
    if (id === undefined || id === null) {
      console.error("Undefined or null ID provided to approveNote");
      return;
    }
    const updatedNotes = notes.map((note) => {
      if (note && note.id === id) {
        return { ...note, isMgrAuthorised: true };
      }
      return note;
    });
    setNotes(updatedNotes);
    setConfirmationMessage({ message: `Progress note with the id ${id} is approved`, type: 'success' });
  };

  const rejectNote = (id) => {
    if (id === undefined || id === null) {
      console.error("Undefined or null ID provided to rejectNote");
      return;
    }
    const updatedNotes = notes.map((note) => {
      if (note && note.id === id) {
        return { ...note, isMgrAuthorised: false };
      }
      return note;
    });
    setNotes(updatedNotes);
    setConfirmationMessage({ message: `Progress note with the id ${id} is rejected`, type: 'danger' });
  };

  const viewNoteDetails = (note) => {
    setSelectedNote(note);
  };


  const unapprovedNotes = notes.filter(note => !note.isMgrAuthorised);

  return (
    <div>
      <Navbar />
      <div className="container mt-5 p-0">
      {confirmationMessage.message && 
          <div className={`alert alert-${confirmationMessage.type === 'success' ? 'success' : 'danger'}`}>
            {confirmationMessage.message}
          </div>
        }
        {selectedNote && (
          <div className="modal d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Note Details</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedNote(null)}></button>
                </div>
                <div className="modal-body">
                  <p><strong>ID:</strong> {selectedNote.id}</p>
                  <p><strong>Date:</strong> {selectedNote.date}</p>
                  <p><strong>Goals:</strong> {selectedNote.goals}</p>
                  <p><strong>Presentation:</strong> {selectedNote.presentation}</p>
                  <p><strong>Actions:</strong> {selectedNote.actions}</p>
                  <p><strong>Outcome:</strong> {selectedNote.outcome}</p>
                  <p><strong>Follow-Up:</strong> {selectedNote.followUp}</p>
                  <p><strong>Follow-Up Note:</strong> {selectedNote.followUpNote}</p>
                  <p><strong>Author:</strong> {selectedNote.author}</p>
                  <p><strong>Client ID:</strong> {selectedNote.client_id}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedNote(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
              <th scope="col">Client</th>
              <th scope="col">Goals</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
              <th scope="col">View Entry</th>
            </tr>
          </thead>
          <tbody>
            {unapprovedNotes.map((note, index) => (
              <tr key={note.id.toString()}>
                <th scope="row">{note.id}</th>
                <td>{note.author}</td>
                <td>{note.date}</td>
                <td>{note.client_id}</td>
                <td>{note.goals.slice(0, 30)}...</td>
                <td>{note.isMgrAuthorised ? "Approved" : "Rejected"}</td>
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
      </div>
    </div>
  );
};

export default CaseNoteApproval;
