 import React,{useState} from 'react';
import './App.css';
import Login from './components/login/login';
import Register from './components/register/register';
import Homepage from './components/homepage/homepage';

import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes
  
} from "react-router-dom";


function App() {
  const [user ,setLoginUser]=useState({})
  return (
    <div className="App">
  <Router>
  
  <Routes>
 
  <Route exact path="/"   element={user && user._id ? (
    <Homepage setLoginUser={setLoginUser} />
  ) : (
    <Login setLoginUser={setLoginUser} />
  )}/>

  <Route     path="/login" setLoginUser={setLoginUser}   element={<Login/>}/>
  <Route  path="/register" element={<Register/>}/>
  
  </Routes>
  
  
  </Router>
 
    
    

        
    </div>
  );
}

export default App;
