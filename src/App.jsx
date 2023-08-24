import {Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Welcome from './welcome';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  return (
      <Routes>
        
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
  )
}

export default App
