import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import { dummyRosters } from "../dummy";
import Pagination, { clientSlicer } from "../components/pagination";
import RosterCreate from "../modals/RosterCreate";
import { getDateList } from "../components/getdates";
import Body from "../components/body/Body";
import RosterUpdate from "../modals/rosterUpdate";
const Roster = () => {
    const twoweeksdays = getDateList()
    const currentdays = twoweeksdays.slice(0, 7)
    // states to create new shift
    // all states: workerName, date, shiftStart, shiftEnd, breakStart, breakEnd
    const [date, setDate] = useState()
    const [workerName, setWorkerName] = useState()

    const [createOpen, setCreateOpen] = useState(false)
    const [updateOpen, setUpdateOpen] = useState(false)

    const [weekdays, setWeekdays] = useState(currentdays);

    // slice all the roster data :step1
    const [dummyclients, setSlicedRosters] = useState(clientSlicer(dummyRosters))

    // page default be [1], then fetch clients data and update pages :step2
    const [clientPage, setClientPage] = useState([1]);
    const pages = (dummyclients) => {
        const n = [];
        for (let i = 1; i <= dummyclients.length; i++) {
            n.push(i);
        }
        setClientPage(n);
    };
    // set current page for retriving data :step3
    const [currentPage, setCurrentPage] = useState(1);

    // fake data , set dummyclients[0] when page loaded, then change when currentPage changes :step4
    const [rostersEachPage, setClientsEachPage] = useState(dummyclients[0]);
    // click button 
    const generateNextWeek = (e) => {
        e.preventDefault()

        setWeekdays(
            twoweeksdays.slice(7, 14)
        )
        setValue(2)
    };
    const [value, setValue] = useState(-1)
    useEffect(() => {
        pages(dummyclients)
    }, [])
    const body = (
        <>

            {createOpen && <RosterCreate setOpen={setCreateOpen} workerName={workerName} setWorkerName={setWorkerName} date={date} setDate={setDate} />}
            {updateOpen && <RosterUpdate setOpen={setUpdateOpen} workerName={workerName} setWorkerName={setWorkerName} date={date} setDate={setDate} />}

            <div className="w-75 text-start mx-auto mt-5" style={{ marginBottom: "100px" }}>
                <div id="second_nav_out" className="d-flex justify-content-between ">
                    <label className="fs-3">Rosters</label>
                </div>
                <hr />

                <div className="d-flex justify-content-end" >

                    <button className="btn" onClick={(e) => {
                        e.preventDefault()
                        setWeekdays(currentdays)
                        setValue(1)
                    }} style={{ color: value === 1 ? "red" : "" }}>current</button>
                    <button className="btn" onClick={generateNextWeek}
                        style={{ color: value === 2 ? "red" : "" }}
                    >next week</button>
                </div>

                <Pagination
                    dummyclients={dummyclients}
                    clientPage={clientPage}
                    setClientsEachPage={setClientsEachPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <div style={{ overflow: "auto", height: "80vh", borderStyle: "solid", borderColor: "lightgray" }} >

                    <table className="table table-bordered p-0" style={{ minWidth: "800px" }} >
                        <thead >
                            <tr style={{ position: "sticky", top: "0" }}>
                                <th style={{ position: "sticky", top: "0", left: "0" }}>Date</th>
                                {
                                    weekdays.map((day, index) => (
                                        <th scope="col" key={index}>{day.slice(5,)}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {rostersEachPage.map((roste, index) => (
                                <tr key={index}>
                                    <th style={{ position: "sticky", top: "0", left: "0" }}>{roste.name}</th>
                                    {weekdays.map((day, index1) => (
                                        <td key={index1} onClick={() => roste.date === weekdays[index1]  ? setUpdateOpen(true) : setCreateOpen(true)}>
                                            <div className="d-flex flex-column">
                                                <label style={{ fontSize: "12px" }}>{roste.date === weekdays[index1] ? roste.shiftStart + " - " + roste.shiftEnd : ""}</label>
                                                <label>
                                                    {roste.date === weekdays[index1] && roste.break ?
                                                        (<label className="bg-primary text-white p-1" style={{ fontSize: "12px" }}>
                                                            <i className="bi bi-cup-fill p-1"></i>
                                                            break: {roste.breakStart.split(' ')[0]} - {roste.breakEnd}
                                                        </label>)
                                                        : ""
                                                    }
                                                </label>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
    return (
        <Body body={body} />

    );
};
export default Roster;
