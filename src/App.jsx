import {Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Welcome from './landpage/welcome';
import { useNavigate } from 'react-router-dom';
import Workers from "./Workers/Workers";
import Worker from "./Workers/Worker";
import Clients from "./Clients/Clients";
import Client from './Clients/Client'


function App() {
  const navigate = useNavigate()
  return (
      <Routes>
        
        <Route path="/" element={<Login navigate={navigate} />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/workers/:id" element={<Worker />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<Client />} />
      </Routes>
  )
}

export default App
