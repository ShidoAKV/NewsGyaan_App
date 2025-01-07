import './App.css';
import React, { useContext, useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { Appcontext } from './Context/Appcontext.js';
import Login from './Components/Login.js';
import { ToastContainer} from 'react-toastify';

const App=()=>{
  const {token,setToken}=useContext(Appcontext);
  const [progress,setprogress]=useState(0);
  
    return (
     <>
     <ToastContainer/>
      {token
       ?
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />

      <Routes>
         <Route    exact path="/" element={<News setprogress={setprogress}  key="newsgyaan"  country="in" category="general" />}></Route> 
          <Route  exact path="/NewsGyaan_App" element={<News setprogress={setprogress}  key="newsgyaan"  country="in" category="general" />}></Route> 
          <Route  exact path="/newsgyaan" element={<News setprogress={setprogress}  key="newsgyaan"  country="in" category="general" />}></Route> 
          <Route  exact path="/home" element={<News setprogress={setprogress}   key="home"  country="in" category="business"/>}></Route>
          <Route  exact path="/general" element={<News setprogress={setprogress} key="general"  country="in" category="general"/>}></Route>
          <Route  exact path="/business" element={<News setprogress={setprogress} key="business"  country="in" category="business"/>}></Route>
          <Route  exact path="/entertainment" element={<News setprogress={setprogress} key="entertainment"  country="in" category="entertainment"/>}></Route>
          <Route  exact path="/sports" element={<News setprogress={setprogress} key="sports"  country="in" category="sports"/>}></Route>
          <Route  exact path="/science" element={<News setprogress={setprogress} key="science"  country="in" category="science"/>}></Route>
          <Route  exact path="/technology" element={<News setprogress={setprogress} key="technology"  country="in" category="technology"/>}></Route>
          <Route  exact path="/health" element={<News setprogress={setprogress} key="health"  country="in" category="health"/>}></Route>
      </Routes>

      </Router>

      </div>
     :<Login/>
     }
    </>
    )

}

export default App;