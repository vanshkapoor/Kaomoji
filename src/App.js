import './App.css';
import './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questionaire from './Pages/Questionaire';
import GameHome from './Pages/GameHome';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GameHome/>} />
        <Route exact path="/play" element={<Questionaire />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
