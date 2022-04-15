import React,{useEffect,useState} from 'react'

const Demo = () => {
  const [state,setState]=useState("Initial");

  const changeState=()=>{
    setState(Math.random());
  }

  // Component did mount phase

  useEffect(()=>{

    console.log("Runs only after first render")
    // this format of useEffect runs only once during initial/first render -->

    // this format of useEffect helps you observer mounting phase of componenet

    return ()=>{

      console.log("Runs when component is removed");
      // this function runs when componenet is unmounted

    }

  },[])

  //Sideffect

  useEffect(()=>{
    console.log("Runs  after first render,and after every successive render")

    // this useEffect runs after every render 
    //Can be used to observe the updation phase of react componenet

  })


  // Unmounting phase





  return (
    <div>

<h1>{state}</h1>
<button onClick={changeState}>
  Change State
</button>

    </div>
  )
}

export default Demo

//Lifecylce is a part of component
// So every component undergoes three lifecycle phases
// Mounting phase  --->Creation phase
// Updation Phase -->Intermediate phase
// Unmounting -->Removal Phase

// class based componnets --->componentdidMount ,componnetdidupdate ,component wiil unmount
//function componnets doesnt have dedicated methods for lifecycle
// We have to use the useeffect hook to observe the lifecycle


// You have to design a page ---
//Data shown on intial load
// Data can be added using form 