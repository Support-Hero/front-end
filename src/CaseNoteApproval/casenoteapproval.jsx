import React, { useState, useEffect } from 'react';
import { api } from '../api'; 
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const CaseNoteApproval = ({ token }) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    fetch(api + '/notes', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch notes - Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setNotes(data))
      .catch((error) => {
        console.error('Error fetching notes:', error);
        setNotes([]); 
      });
  };
  

  const approveNote = (id) => {
    fetch(api + '/notes/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isMgrAuthorised: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedNotes = notes.map((note) =>
          note._id === id ? { ...note, isMgrAuthorised: true } : note
        );
        setNotes(updatedNotes);
        setConfirmationMessage({
          message: `Progress note with the id ${id} is approved`,
          type: 'success',
        });
      })
      .catch((error) => console.error('Error updating note:', error));
  };

  const rejectNote = (id) => {
    fetch(api + '/notes/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isMgrAuthorised: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedNotes = notes.map((note) =>
          note._id === id ? { ...note, isMgrAuthorised: false } : note
        );
        setNotes(updatedNotes);
        setConfirmationMessage({
          message: `Progress note with the id ${id} is rejected`,
          type: 'danger',
        });
      })
      .catch((error) => console.error('Error updating note:', error));
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
