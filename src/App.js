import logo from './logo.svg';
import './App.css';
import './Components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questionaire from './Pages/Questionaire';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Questionaire />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
