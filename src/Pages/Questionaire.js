import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import Question from '../Components/Question';
import AnswerInput from '../Components/AnswerInput';
import {
  useParams
} from "react-router-dom";
import * as FireService from "../firebase";
import { Button, Container,Input } from '@chakra-ui/react'
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

function Questionaire() {
  const [arr, setArr] = useState([])
  const [qarr, setQarr] = useState([])
  const [ind, setInd] = useState(0)
  const [currque, setCurrque] = useState([])
  const [loading, setLoading] = useState(true)
  const [len, setLen]=useState(0)
  const [ans, setAns] = useState("")
  const [validate, setValidate] = useState(null)
  let { type } = useParams();    

  async function fetchResp(type, arr){ //firebase
    console.log(arr)
    
    const qnRef =  collection(FireService.db, type)
    const quer = query(qnRef, limit(4))
    const Snap = await getDocs(quer)          

    Snap.forEach(obj => {    
      var data = obj.data()      
      {
        setQarr(qarr => [...qarr, data]);
      }      
    })   
  }  

  useEffect(()=>{          
    var subarr = []
    while(subarr.length<3)
    {
      var r = Math.floor((Math.random() * 4) + 1);
      if(subarr.indexOf(r) == -1) subarr.push(r)      
    }
    setArr(subarr)

    fetchResp(type, arr)    //firebase        
    setLoading(false)
  }, [])

  const updateIndexAndValidate=()=>{    
    setAns("")
    if(qarr[arr[ind]].answer == ans)
    {
      
      setValidate(true)
    }else{
      setValidate(false)
    }        
  }

  const updateIndex=()=>{
    setValidate(null)
    setInd(ind+1)
  }

    return loading == true || qarr.length<4? <p>loading</p>:<div>
      <div className="App">
        {console.log(qarr)}
        <Navbar />        
            <div >              
              {<Question index={ind} arr={arr} questionArr={qarr[arr[ind]]}/>}
            </div>          
        <br />
        {ind<3?
        <>
        <Container>
        <br />
        <Input placeholder='Enter your answer' 
        _placeholder={{ opacity: 1, color: '#5C79E0' }}
        onChange={e => setAns(e.target.value)}
        size="lg"
        />
        </Container>
        <br />
        <Container textAlign="center">
          <Button colorScheme='blue' size='lg' onClick={updateIndexAndValidate} disabled={ind==3}>
              Submit
          </Button>
        </Container>
        <br />
        {
          validate==true?
          <div>
            <Container backgroundColor="green">
              <p>Correct Answer</p>
              <Button colorScheme='white' size='lg' onClick={updateIndex} disabled={ind==3}>
                NEXT
              </Button>
            </Container>
          </div>:<></>
        }
        {
          validate == false?
          <div>
            <Container backgroundColor="red">
            <p>InCorrect Answer</p>
              <Button colorScheme='white' size='sm' onClick={updateIndex} disabled={ind==3}>
                NEXT
              </Button>
            </Container>
          </div>:<></>
        }
        </>
        :
        <></>
        }                
      </div>
    </div>
  }
  
  export default Questionaire;