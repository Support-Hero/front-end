import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Welcome from "./landpage/welcome";
import { useNavigate } from "react-router-dom";
import Workers from "./Workers/Workers";
import Worker from "./Workers/Worker";
import Clients from "./Clients/Clients";
import Client from "./Clients/Client";
import CreateNotes from './createnotes/createNotes';
import WorkerDashboard from "./WorkerDashboard/WorkerDashboard";
import Roster from "./rosters/Roster";


function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Login navigate={navigate} />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/workers/:id" element={<Worker />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/clients/:id" element={<Client />} />
      <Route path="/create-notes" element={ <CreateNotes />} />
      <Route path="/worker-dashboard" element={ <WorkerDashboard />} />
      <Route path="/rosters" element={ <Roster />} />
    </Routes>
  )
}

export default App;
