import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Welcome from "./landpage/welcome";
import { useNavigate } from "react-router-dom";
import Workers from "./Workers/Workers";
import Worker from "./Workers/Worker";
import Clients from "./Clients/Clients";
import Client from "./Clients/Client";
import Note_4Client from "./Notes_record/Note_4Client";
import NotesRecord from "./Notes_record/NotesRecord";
import CreateNotes from './createnotes/createNotes';

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
      <Route path="/notes" element={<NotesRecord />} />
      <Route path="/notes/:id" element={<Note_4Client />} />
    </Routes>
  );
}

export default App;
