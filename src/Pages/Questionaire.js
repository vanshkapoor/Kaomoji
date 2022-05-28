import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Question from '../Components/Question';
import AnswerInput from '../Components/AnswerInput';
import * as FireService from "../firebase"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function Questionaire() {
  const [arr, setArr] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchResp(){
    const qnRef =  collection(FireService.db, "questions")
    const quer = query(qnRef, where("level", "==", 1), where("type", "==",  "music"))
    const Snap = await getDocs(quer)      

    Snap.forEach(obj => {
      console.log(obj.data())
    })

  }

  useEffect(()=>{
    // generate 6 random numbers in an array
    var subarr = []
    while(subarr.length<6)
    {
      var r = Math.floor((Math.random() * 10) + 1);
      if(subarr.indexOf(r) == -1) subarr.push(r)      
    }
    setArr(subarr)
    setLoading(false)

    fetchResp()

  }, [])

    return (
      <div className="App">
        {(loading!=true)&&(console.log(arr))}
        <Navbar />
        <Question />
        <AnswerInput/>
      </div>
    );
  }
  
  export default Questionaire;