import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// pass token
const Note_4Worker = ({token})=>{
    const {worker_id}= useParams()

    const [notes, setNotes]=useState()
    const fetchnoteByclientId=async()=>{
        await fetch(api + "/notes/"+worker_id, {
              method: "GET",
              mode: "cors",
              credentials: "same-origin", 
              headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
              },
              body: formData,
            }).then((res)=> {
              localStorage.setItem('username','km@g.com')
            }).catch(error=> {
              console.error("Error:", error);
            })
    }
    return (
        <div>
            fetch all notes created by that worker
        </div>)
}
export default Note_4Worker