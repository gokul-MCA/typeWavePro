import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Test from "./pages/Test";
import New from "./pages/New";
import "./App.css";
import { blue, grey, pink } from "@mui/material/colors";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisited", "true");
      }, 5000); // Simulate a 3 second loading time
    } else {
      setLoading(false);
    }
  }, []);

  function NoFound() {
    return <h2>404 - Page Not Found</h2>;
  }
  function LoadCycle() {
    return (
      <div className="prev">
        <h1>
          Hi, <span>Welcome to TypeWave Pro!</span>
        </h1>
        <p className="loader"></p>
      </div>
    );
  }

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#000',  //balck
      },
      secondary: {
        main: '#fff',  //white
      },
      error: {
        main:'#c2185b' ,  //pink
      },
      warning: {
        main: '#ff1744',  //red
      },
      info: {
        main:'#2196f3' ,  // blue
      },
      success: {
        main:'#d500f9' ,  //purple
      },
    },
  });
  

  return (
    <div>
      {loading ? (
        <LoadCycle />
      ) : (
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/input" element={<Home />} />
              <Route path="/typing" element={<Test />} />
              <Route index element={<New />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
};

export default App;
