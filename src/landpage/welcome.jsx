import React, { useEffect } from "react";
import Body from '../components/body/Body'
import { Link } from "react-router-dom";
import '../components/Sidebar/sidebar.css'
export const lists = [
  {
    imsrc: "bi-people",
    bgcolor: "primary ",
    title: "workers",
    description: "worker information, crud",
  },
  {
    imsrc: "bi-person-vcard",
    bgcolor: "success ",
    title: "clients",
    description: "worker information, crud",
  },
  {
    imsrc: "bi-file-earmark-medical",
    bgcolor: "secondary ",
    title: "rosters",
    description: "worker information, crud",
  },
  {
    imsrc: "bi-microsoft-teams",
    bgcolor: "danger",
    title: "notes",
    description: "worker information, crud",
  },

];
const Welcome = () => {

  const username = "Emma"
  const clientsProgress = [
    { clientname: "emma li", color: "success", process: "44%" },
    { clientname: "misla s", color: "danger", process: "26%" },
    { clientname: "sade ew", color: "secondary", process: "34%" },
    { clientname: "lorai  sa", color: "warning", process: "74%" },
    { clientname: "advr df3", color: "info", process: "54%" },
    { clientname: "masa lo", color: "danger", process: "84%" }
  ]
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("access") && localStorage.getItem("user")) {
      setToken(localStorage.getItem("access"))
      setUserId(JSON.parse(localStorage.getItem("user")))
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [])
  const body = (
    <div className="w-75  mx-auto mt-5" style={{ paddingBottom:"100px" }}>
      <div className="">

        <label className="fs-3">Welcome,<label className="text-primary fw-light" style={{ paddingLeft: "10px" }}>{username}</label> </label>
        <hr />
        <div id='lg_main_bar'>
          <div class="row gx-5 gy-4">
            <div className="col-4 ">
              <div className="border shadow rounded p-2">

                Actions
                <div className="text-center">
                  <label className="fs-1 ">Actions</label>
                </div>
              </div>
            </div>
            <div className="col-7 ">
              <div className="p-2 border shadow rounded">
                Notifications
                <div className="text-center">
                  <label className="fs-1 ">Notifications</label>
                </div>
              </div>
            </div>

            <div className="col-6 ">
              <div className="p-2 border shadow rounded">

                Latest Notes
                <ul className="list-group p-4 ">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A list item
                    <span className="badge bg-primary rounded-pill">1</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span className="badge bg-primary rounded-pill">1</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge bg-primary rounded-pill">1</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 ">
              <div className="p-2 border shadow rounded">

                This week's clients
                <ul className="list-group p-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Client 1
                    <Link to='/clients/:name' >View</Link>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Client 1
                    <Link to='/clients/:name'>View</Link>
                  </li><li className="list-group-item d-flex justify-content-between align-items-center">
                    Client 1
                    <Link to='/clients/:name' >View</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-10 ">
              <div className="p-2 border shadow rounded">
                Client Care Progress List
                <hr />
                {
                  clientsProgress.map((progres, index) => (
                    <div className="d-flex w-100 justify-content-between align-items-center px-2">
                      <div className="">{progres.clientname}</div>
                      <div className="progress my-3"style={{width:"90%"}}>
                        <div className={`progress-bar bg-${progres.color}`} style={{ width: progres.process }}></div>
                      </div>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </div>

        <div id='main_bar' style={{ paddingBottom: '100px' }} >
          {lists.map((list, index) => (
            <div
              className={`w-100  mt-3 border border-${list.bgcolor}`}
              key={index}
            >
              <div
                className={`d-flex justify-content-between  p-2 bg-${list.bgcolor} bg-opacity-75`}
              >
                <i className={`bi ${list.imsrc} text-white fs-1`}></i>
                <Link to={`/${list.title}`}> <label className="fs-2 text-white">{list.title}</label></Link>
              </div>

              <div className="p-2 bg-secondary bg-opacity-25">{list.description}</div>
            </div>
          ))}
        </div>
      </div>
      Have a great day!
    </div>
  )
  return (
    <Body body={body} />
  );
};
export default Welcome;
