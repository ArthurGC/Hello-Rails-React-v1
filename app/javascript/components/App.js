import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import Greeting from './Greeting'
import HelloWorld from "./HelloWorld";

const store = configureStore();

const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/hello' element={<HelloWorld/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
