import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);


  


  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    


    
    <Navbar/>

    <Routes>
       <Route path="/" element= {<Home isLoggedIn ={isLoggedIn} />} />
       <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn} />} />
       <Route path="/signup" element= {<Signup/>} />
       <Route path="/dashboard" element= {<Dashboard/>} />
    </Routes>
    
  </div>
    

  )
}

export default App