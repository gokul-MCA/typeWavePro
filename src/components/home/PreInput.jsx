import React, { createContext, useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const GeminiContext = createContext();

export function GeminiInReact({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [promptResponses, setpromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const localStorageData = localStorage.getItem("myData");
    if (localStorageData) {
      setInputValue(localStorageData);
    }
  }, []);

  const genAI = new GoogleGenerativeAI(API_KEY);
    // add your api key here
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(
        inputValue + "minimum 100 words in single paragraph"
      );
      const response = result.response.text();
      // const text = response.text();
      // console.log(response)
      // setpromptResponses([...promptResponses, text]);
      setpromptResponses([...promptResponses, response]);
      localStorage.setItem("requestData", [...promptResponses, response]);
      setInputValue("");
      setLoading(false);
      localStorage.removeItem("myData");
    } catch (error) {
      console.log(error);
      console.log("Something Went Wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("myData", inputValue);
  }, [inputValue]);

  return (
    <GeminiContext.Provider
      value={{
        inputValue,
        handleInputChange,
        getResponseForGivenPrompt,
        promptResponses,
        loading,
      }}
    >
      {children}
    </GeminiContext.Provider>
  );
}

export default GeminiContext;
