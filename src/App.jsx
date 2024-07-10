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

  return ( 
    <div>
      {loading ? (
        <div className="prev">
        <h1>Hi, <span>Welcome to TypeWave Pro!</span></h1>
        <p className="loader"></p>
        </div>
      ):(
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/typing" element={<Test />} />
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
};

export default App;
