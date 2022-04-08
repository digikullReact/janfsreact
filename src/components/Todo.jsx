import React,{useState,useEffect} from 'react'

const Todo = () => {
    /**
     * const [state,setState]=useState("");
     * const [tasks,setTasks]=useState([]);
     */
    const [state,setState] =useState({
        task:"",
        date:"",
        creator:"",
        duration:""
    })

    const [tasks,setTasks]=useState([]);

    const handleChange=(event)=>{
       // state[event.target.name]=event.target.value;
        setState({...state,[event.target.name]:event.target.value}) // not trigerring the re render


    }

    // creator
    // Duration 

    const clickHandler=()=>{
        /*
        const items=[...tasks];
        items.push(state);
       // tasks.push(state);
        setTasks(items); // We are
        */
       setTasks([...tasks,state]);
       setState({
        task:"",
        date:"",
        creator:"",
        duration:""
       })

    }

    const deleteTask=(index)=>{
        //console.log(index);

        // We have to modify the tasks array and delete the item from the array 

        //console.log(tasks);
        tasks.splice(index, 1);
        setTasks([...tasks]);

    }
 
  return (
    <div className='container'>
        <div className='row' style={{marginTop:"200px"}}>
        
            <div className='col-4 offset-4'>

            <input type="text" name='task' value={state.task} className='form-control' placeholder='Task' onChange={handleChange}/><br/>
            <input type="date"  name='date' value={state.date} className='form-control' placeholder='Date' onChange={handleChange}/><br/>
            <input type="creator"  name='creator' value={state.creator} className='form-control' placeholder='Date' onChange={handleChange}/><br/>
            <input type="duration"  name='duration' value={state.duration} className='form-control' placeholder='Date' onChange={handleChange}/>

            <button  className='btn btn-primary' style={{marginTop:"10px"}}  onClick={clickHandler}>
                Add To Do

            </button>
            </div>



        </div>

        <div className='row'>

            <div className='col-6 offset-3'>
             

<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Task</th>
      <th scope="col">Creator</th>
      <th scope="col">Date</th>
      <th scope="col">Duration</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
      {
          tasks.map((ele,i)=>(
              <tr>
                  <td>{i+1}</td>
                  <td>{ele.task}</td>
                  <td>{ele.date}</td>
                  <td>{ele.creator}</td>
                  <td>{ele.duration}</td>
                  <td><button onClick={()=>deleteTask(i)} className="btn btn-danger">
                      Delete Task
                      </button></td>
                  

              </tr>

          ))
      }
      

 
  </tbody>
</table>
                        
                        </div>

                

            </div>

</div>

  )
}

export default Todo