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

function App() {


  return (
    <div className="App">
     

     {
       /**
        *  <Home/>
        *     <Show/>
        *   <Todo/>
        * <Lifecycle/>
        */
     }

     <GoogleBooks/>



   
  
     
 
    </div>
  )
}

export default App
