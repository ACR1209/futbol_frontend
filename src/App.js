import Inscription from "./components/Inscription";
import { Routes, Route } from 'react-router-dom'
import ShowTeams from "./components/ShowTeams";

function App() {
  return (
    <div className="w-full min-h-full flex justify-center items-center bg-gray-300" style={{minHeight: '100vh'}}>
      <Routes>
        <Route path="/register-team" element={<Inscription/>} />  
        <Route exact path="/" element={<ShowTeams />} />  
      </Routes>      
    </div>
  );
}

export default App;
