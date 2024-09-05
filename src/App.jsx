import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import './App.css';


const App = () => {

  const[loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 5000); // Simulate a 3 second loading time
    } else {
      setLoading(false);
    }
  }, []);

  function NoFound(){
    return <h2>404 - Page Not Found</h2>
  }
  function LoadCycle(){
    return (
      <div className="prev">
        <h1>Hi, <span>Welcome to TypeWave Pro!</span></h1>
        <p className="loader"></p>
        </div>
    )
  }

  return ( 
    <div>
      {loading ? (
        <LoadCycle/>
      ):(
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/typing" element={<Test />} />
          <Route path='*' element={<NoFound/>}/>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
};

export default App;
