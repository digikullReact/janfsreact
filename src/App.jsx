import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Show from './components/Show'
import Todo from './components/Todo'
import Lifecycle from './components/Lifecycle'
import GoogleBooks from './components/GoogleBooks'
import Initalload from './components/Initalload'
import Demo from './components/Demo'
import {

  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <div className="App">

<Routes>
      <Route path="/googlebooks" element={<GoogleBooks />} />
      <Route path="/lifecycle" element={<Lifecycle/>}/>

       
   
      </Routes>
     

     {
       /**
        *  <Home/>
        *     <Show/>
        *   <Todo/>
        *   <Demo/>
        *     <GoogleBooks/>
        * <Initalload/>
        */
     }


   


 



   
  
     
 
    </div>
  )
}

export default App
