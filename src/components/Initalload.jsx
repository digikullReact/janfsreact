
import React,{useEffect,useState} from 'react'
import axios from 'axios'

// diplay the books along with images 

// We will do a functionality for --Marking favourite

const Initalload = () => {
    const [state,setState]=useState({})

    const apiCall=()=>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response=>{
            setState(response.data);

        }).catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        apiCall();

    },[])
  return (
    <div>
      <h1> {state.chartName}</h1> 
      
    </div>
  )
}

export default Initalload