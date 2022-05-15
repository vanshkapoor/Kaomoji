import React from 'react'
import Navbar from '../Components/Navbar';
import Question from '../Components/Question';
import AnswerInput from '../Components/AnswerInput';


function Questionaire() {
    return (
      <div className="App">
        <Navbar />
        <Question />
        <AnswerInput/>
      </div>
    );
  }
  
  export default Questionaire;