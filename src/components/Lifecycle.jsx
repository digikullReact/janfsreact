import React ,{useEffect,useState} from 'react'
import axios from 'axios'

const Lifecycle = () => {
    const [state,setState]=useState({
        age: 2,
        colour: "blue",
        name: "Sparkle Angel"
    })


    const [data,setData]=useState([]);

    const apiCall=()=>{
        let config = {
            headers: {
                "Access-Control-Allow-Headers": '*',
            }
          }
    
        axios.get("https://crudcrud.com/api/9ae2353f325a4279b6a7edb55608aaca/unicorns").then(data=>{
            //console.log()
            setData(data["data"])
        }).catch(err=>{
            console.log(err);
        })
    }


useEffect(()=>{
      // So here if you want to do anything when the component is loaded
    // And you want to do that thing only once
    // then you have to run the proces herer

    apiCall();

    //console.log("With array argument")

},[])

const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

}




const clickHandler=()=>{

    let config = {
        headers: {
            "Access-Control-Allow-Origin": '*',
        }
      }
      
   axios.post("https://crudcrud.com/api/9ae2353f325a4279b6a7edb55608aaca/unicorns",config,state).then(data=>{
       //alert("Success")

       apiCall();

       // Once this is success ---
       // We can make an api call again
   }).catch(err=>{
       console.log(err);
   })
}



  return (
      <div className='container'>
           <div className='row'>
        <div className='col-4 offset-4'>

            <input type="text" className='form-control' onChange={handleChange}/>

<button onClick={clickHandler} className='btn btn-success'>
Change State
</button>

        </div>
      


    

    </div>
    <div className='row'>

        {
            data.map(ele=>(
                <li key={ele._id}>{ele._id} {ele.name}</li>
            ))
        }

    </div>

      </div>
   

   
  )
}

export default Lifecycle