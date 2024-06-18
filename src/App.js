import './App.css';
import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{

  const [progress,setprogress]=useState(0);
  
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />

      <Routes>
          <Route  exact path="/newsgyaan" element={<News setprogress={setprogress}  key="newsgyaan" pageSize={6} country="in" category="general" />}></Route> 
          <Route  exact path="/home" element={<News setprogress={setprogress}   key="home" pageSize={6} country="in" category="business"/>}></Route>
          <Route  exact path="/general" element={<News setprogress={setprogress} key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route  exact path="/business" element={<News setprogress={setprogress} key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route  exact path="/entertainment" element={<News setprogress={setprogress} key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route  exact path="/sports" element={<News setprogress={setprogress} key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route  exact path="/science" element={<News setprogress={setprogress} key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route  exact path="/technology" element={<News setprogress={setprogress} key="technology" pageSize={6} country="in" category="technology"/>}></Route>
          <Route  exact path="/health" element={<News setprogress={setprogress} key="health" pageSize={6} country="in" category="health"/>}></Route>
      </Routes>

      </Router>

      </div>

    )

}

export default App;