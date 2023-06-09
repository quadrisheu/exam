import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Special from './pages/Special'
import Register from './pages/Register'
import LogIn from './pages/LogIn'



function App() {
  
    return (
      <div>
         <BrowserRouter>

            <Routes>
               <Route path='/register' element={<Register />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/*' element={<Special />}/>
             </Routes>
         </BrowserRouter>   
      </div>
  )
}

export default App
