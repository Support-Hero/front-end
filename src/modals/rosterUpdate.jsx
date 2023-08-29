import React from 'react'
import { api } from "../api";
// props
// id, setWorkerName,
// setDate, setShiftStart, setShiftEnd, setBreakStart, setBreakEnd,
// workerName, date, shiftStart, shiftEnd, breakStart, breakEnd,
// setOpen
const RosterUpdate = ({setOpen, workerName, setWorkerName, date, setDate}) => {
    const updateRoster = async (setOpen,
        workerName, date,
        shiftStart, shiftEnd, breakStart, breakEnd, id) => {
        // update service
        // const res = await fetch(api + "/rosters/"+id, {
        //   method: "PUT",
        //   body: JSON.stringify(
        //     {workerName:workerName,
        //         date:date,
        //         shiftStart:shiftStart,
        //         shiftEnd:shiftEnd,
        //         breakStart:breakStart,
        //         breakEnd:breakEnd
        //     }
        //   ),
        //   headers: {
        //     'Content-type': 'application/json'
        //   }
        // })
        // window.location.reload()
        //close modal
        setOpen(false)
    };
    const updateModal = (setOpen,workerName, setWorkerName, date, setDate) => (
        <div className='bg-black w-100 h-100 bg-opacity-75 pt-5' style={{ position: "absolute", top: "0", zIndex: 1 }}>
            <div className="bg-white w-50 mx-auto p-5">
                <form
                    className="p-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        updateRoster(setOpen,
                            workerName, date,
                            shiftStart, shiftEnd, breakStart, breakEnd, id);
                    }}
                >
                    <h5 aria-label='Update Client'>
                        Update Client
                    </h5>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label"> worker name:</label>
                        <input
                            required
                            value={workerName}
                            onChange={(e) => {
                                e.preventDefault();
                                setWorkerName(e.target.value);
                            }}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">
                            Select Date
                        </label>
                        <input
                            required
                            type="date"
                            value={date}
                            onChange={(e) => {
                                e.preventDefault();
                                setDate(e.target.value);
                            }}
                            className="form-control"
                        />
                    </div>
                    <div className="d-flex mb-3 ">
                        <div className="d-flex flex-column " style={{ marginRight: "20px" }}>
                            <label htmlFor="phonenumber" className="form-label">
                                Shift Start
                            </label>
                            <input required
                                className="form-control"
                                type="time"
                                //   value={shiftStart}
                                onChange={(e) => {
                                    e.preventDefault();
                                    // setShiftStart(e.target.value);
                                }}
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="address" className="form-label">
                                Shift End
                            </label>
                            <input required
                                className="form-control"
                                type="time"
                                //   value={shiftEnd}
                                onChange={(e) => {
                                    e.preventDefault();
                                    // setShiftEnd(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="d-flex flex-column" style={{ marginRight: "20px" }}>
                            <label htmlFor="phonenumber" className="form-label">
                                Break Start
                            </label>
                            <input
                                className="form-control"
                                type="time"
                                //   value={breakStart}
                                onChange={(e) => {
                                    e.preventDefault();
                                    // setBreakStart(e.target.value);
                                }}
                            />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="address" className="form-label">
                                Break End
                            </label>
                            <input required
                                className="form-control"
                                type="time"
                                //   value={breakEnd}
                                onChange={(e) => {
                                    e.preventDefault();
                                    // setBreakEnd(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-md-between">
                        <button
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                setWorkerName()
                                setDate()
                                setOpen(false)
                            }}
                        >
                            Close
                        </button>
                        <button type="submit" className="btn btn-danger" onClick={(e) => {
                                e.preventDefault();
                                setOpen(false)
                            }}>
                            Delete{" "}
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Update{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    return (
        <>
            {updateModal(setOpen,workerName, setWorkerName, date, setDate)}
        </>)
}
export default RosterUpdate