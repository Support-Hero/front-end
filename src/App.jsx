import {Routes, Route} from "react-router-dom";
import Login from "./login/login";
import Welcome from './landpage/welcome';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  return (
      <Routes>
        
        <Route path="/" element={<Login navigate={navigate} />} />
        <Route path="/main" element={<Welcome />} />
      </Routes>
  )
}

export default App
