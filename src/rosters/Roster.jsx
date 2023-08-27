import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar"
import { dummyRosters } from "../dummy";
import Pagination, { clientSlicer } from "../components/pagination";
const Roster = () => {
    const currentedays = [
        "2023-08-01",
        "2023-08-02",
        "2023-08-03",
        "2023-08-04",
        "2023-08-05",
        "2023-08-06",
        "2023-08-07",
    ]
    const [weekdays, setWeekdays] = useState(currentedays);
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
            [
                "2023-08-08",
                "2023-08-09",
                "2023-08-10",
                "2023-08-11",
                "2023-08-12",
                "2023-08-13",
                "2023-08-14",
            ]
        )
    };
    const generatePrevioustWeek = (e) => {
        e.preventDefault()
        setWeekdays([
            "2023-07-25",
            "2023-07-26",
            "2023-07-27",
            "2023-07-28",
            "2023-07-29",
            "2023-07-30",
            "2023-07-31",
        ])
    };
    useEffect(() => {
        pages(dummyclients)
    }, [])
    console.log('roste', rostersEachPage, currentPage)
    // console.log('slice',dummyclients[2])
    return (
        <div>
            <Navbar />
            <div className="container">

                <div className=" text-start mx-auto mt-5">
                    <div id="second_nav_out" className="d-flex justify-content-between ">
                        <label className="fs-3">Clients</label>

                        <button
                            className="btn btn-primary "
                            data-bs-toggle="modal"
                            data-bs-target="#clientAddModal"
                        >
                            + Add New Shift
                        </button>
                    </div>
                    <hr />
                </div>
                <div className="d-flex justify-content-end" >

                    <button className="btn" onClick={generatePrevioustWeek}>previous</button>
                    <button className="btn" onClick={(e) => {
                        e.preventDefault()
                        setWeekdays(currentedays)
                    }}>current week</button>
                    <button className="btn" onClick={generateNextWeek}>next</button>
                </div>
                <div>

                    <Pagination
                        dummyclients={dummyclients}
                        clientPage={clientPage}
                        setClientsEachPage={setClientsEachPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>

                <table className="table table-bordered p-0" >
                    <thead>
                        <tr>
                            <th></th>
                            {
                                weekdays.map((day, index) => (
                                    <th scope="col" key={index}>{day}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rostersEachPage.map((roste, index) => (
                            <tr key={index}>
                                <td>{roste.name}</td>
                                {weekdays.map((day, index) => (
                                    <td>
                                        <div className="d-flex flex-column">
                                            <label>{roste.date === weekdays[index] ? roste.shiftStart + " - " + roste.shiftEnd : ""}</label>
                                            <label>
                                                {roste.date === weekdays[index] && roste.break ?
                                                    (<label className="bg-primary text-white m-1 p-1">
                                                        <i class="bi bi-cup-fill p-1"></i>
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
    );
};
export default Roster;
