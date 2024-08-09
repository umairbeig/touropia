import React, { StrictMode } from 'react';
import './App.css';
import { toast, ToastContainer } from "react-toastify";
import { Routes, Router, BrowserRouter, Route } from "react-router-dom"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
function App() {
  return (
    <div className="App">


      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
