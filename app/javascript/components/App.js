import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from './Greeting'
import HelloWorld from "./HelloWorld";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/hello' element={<HelloWorld/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
