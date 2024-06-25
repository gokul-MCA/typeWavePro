import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import './App.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/typing" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
