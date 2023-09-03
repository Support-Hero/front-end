import React, { useEffect, useState } from "react";
import { dummyRosters } from "../dummy";
import Pagination, { clientSlicer } from "../components/pagination";
import { getDateList } from "../components/getdates";
import Body from "../components/body/Body";

const WorkerRoster = ({ token }) => {
  const twoweeksdays = getDateList();
  const currentdays = twoweeksdays.slice(0, 7);

  const [weekdays, setWeekdays] = useState(currentdays);

  const [dummyclients, setSlicedRosters] = useState(clientSlicer(dummyRosters));
  const [clientPage, setClientPage] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rostersEachPage, setClientsEachPage] = useState(dummyclients[0]);
  const [value, setValue] = useState(-1);

  useEffect(() => {
    const n = [];
    for (let i = 1; i <= dummyclients.length; i++) {
      n.push(i);
    }
    setClientPage(n);
  }, []);

  const generateNextWeek = (e) => {
    e.preventDefault();
    setWeekdays(twoweeksdays.slice(7, 14));
    setValue(2);
  };

  const body = (
    <div className="w-75 text-start mx-auto mt-5" style={{ marginBottom: "100px" }}>
      <div id="second_nav_out" className="d-flex justify-content-between ">
        <label className="fs-3">Rosters</label>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
        <button className="btn" onClick={() => { setWeekdays(currentdays); setValue(1); }} style={{ color: value === 1 ? "red" : "" }}>current</button>
        <button className="btn" onClick={generateNextWeek} style={{ color: value === 2 ? "red" : "" }}>next week</button>
      </div>
      <Pagination
        dummyclients={dummyclients}
        clientPage={clientPage}
        setClientsEachPage={setClientsEachPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div style={{ overflow: "auto", height: "80vh", borderStyle: "solid", borderColor: "lightgray" }}>
        <table className="table table-bordered p-0" style={{ minWidth: "800px" }}>
          <thead>
            <tr>
              <th>Date</th>
              {weekdays.map((day, index) => (
                <th scope="col" key={index}>{day.slice(5,)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rostersEachPage.map((roste, index) => (
              <tr key={index}>
                <th>{roste.name}</th>
                {weekdays.map((day, index1) => (
                  <td key={index1}>
                    <div className="d-flex flex-column">
                      <label style={{ fontSize: "12px" }}>{roste.date === weekdays[index1] ? roste.shiftStart + " - " + roste.shiftEnd : ""}</label>
                      <label>
                        {roste.date === weekdays[index1] && roste.break ? (
                          <label className="bg-primary text-white p-1" style={{ fontSize: "12px" }}>
                            <i className="bi bi-cup-fill p-1"></i>
                            break: {roste.breakStart.split(' ')[0]} - {roste.breakEnd}
                          </label>
                        ) : ""}
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

  return <Body body={body} />;
};

export default WorkerRoster;
