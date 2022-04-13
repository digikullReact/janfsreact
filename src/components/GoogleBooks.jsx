import React,{useState} from 'react'
import axios from 'axios'
const GoogleBooks = () => {
    const [state,setState]=useState([])

    const clickHandler=()=>{

        // Makinng an api request 

        axios.get("https://www.googleapis.com/books/v1/volumes?q=Premchand").then(response=>{
            console.log(response.data);
            setState(response.data.items)

        }).catch(err=>{
            console.log(err);
        })

        

    }
  return (
    <div className='container'>
        <div className='row'>

            <div  className='col-3 offset-3' style={{marginTop:"150px"}}>

                <button className='btn btn-success' onClick={clickHandler}>
                 Fetch Data
                </button>

            </div>

        </div>


        <div className='row'>

            {
            state.map(ele=>(
                <li key={ele.id}>{ele.volumeInfo.title}</li>
            ))
            }

</div>


    </div>
  )
}

export default GoogleBooks