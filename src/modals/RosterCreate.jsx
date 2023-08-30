import React from 'react'
import './rostercreate.css'
const RosterCreate = ({ setWorkerName, workerName, date, setDate, setOpen }) => {
    const createshiftModal = (setWorkerName, workerName, date, setDate, setOpen) => (
        <div className='bg-black w-100 bg-opacity-75 pt-5' style={{ height: "120vh", position: "absolute", top: "0", zIndex: 1 }}>
            <div className="bg-white mx-auto p-5" id='modal-box'>
                <form
                    className="p-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addnewShift(
                            setOpen,
                            workerName, date,
                        );
                    }}
                >
                    <h5 > Add Shift</h5>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="workername" className="form-label"> worker name:</label>
                        <input
                            required
                            id='workername'
                            aria-label='workername'
                            value={workerName}
                            onChange={(e) => {
                                e.preventDefault();
                                setWorkerName(e.target.value);
                            }}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Select Date
                        </label>
                        <input
                            required
                            id='date'
                            aria-label='date'
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
                            <label htmlFor="Shift Start" className="form-label">
                                Shift Start
                            </label>
                            <input required
                            id='Shift Start'
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
                            <label htmlFor="Shift End" className="form-label">
                                Shift End
                            </label>
                            <input required
                            id='Shift End'
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
                            <label htmlFor="Break Start" className="form-label">
                                Break Start
                            </label>
                            <input
                            id='Break Start'
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
                            <label htmlFor="Break End" className="form-label">
                                Break End
                            </label>
                            <input required
                            id='Break End'
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
                        <button type="submit" className="btn btn-primary">
                            Save{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    return (
        <>
            {createshiftModal(setWorkerName, workerName, date, setDate, setOpen)}
        </>)
}
export default RosterCreate