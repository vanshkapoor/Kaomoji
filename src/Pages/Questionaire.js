import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Question from '../Components/Question';
import AnswerInput from '../Components/AnswerInput';
import * as FireService from "../firebase";
import { Button, Container } from '@chakra-ui/react'
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

function Questionaire() {
  const [arr, setArr] = useState([])
  const [qarr, setQarr] = useState([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

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
  }, [])

  const updateIndex=()=>{
    console.log(arr)
    setIndex(index+1);
  }

    return loading == true? <p>loading</p>:<div>
      <div className="App">
        <Navbar />
            <div >              
              {<Question index={index} arr={arr} />}
            </div>          
        <br />
        {index<6?
        <>
        <AnswerInput/>
        <br />
        <Container textAlign="center">
          <Button colorScheme='blue' size='lg' onClick={updateIndex} disabled={index==6}>
              NEXT
          </Button>
        </Container>
        </>
        :
        <></>
        }                
      </div>
    </div>
  }
  
  export default Questionaire;