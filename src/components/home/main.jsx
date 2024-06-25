import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./Gemini.module.css";

function GeminiInReact() {
  const [inputValue, setInputValue] = useState("");
  const [promptResponses, setpromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localStorageData = localStorage.getItem("myData");
    if (localStorageData) {
      setInputValue(localStorageData);
    }
  }, []);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyAi2pyaQcqnT2c1_qRLX1CSBMFQa8V-T1s"
    // add your api key here
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(
        inputValue + "minimum 110 words in paragraph"
      );
      setInputValue("");
      const response = result.response.text();
      // const text = response.text();
      // console.log(text)
      // setpromptResponses([...promptResponses, text]);
      setpromptResponses([...promptResponses, response]);

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
    <div className={styles.container}>
      <div className={styles.inputFields}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter the Topic you choose"
          className={styles.formControl}
        />
        <button onClick={getResponseForGivenPrompt} className={styles.btn}>
          Send
        </button>
      </div>

      {loading ? (
        <div className="text-center mt-3">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            // This message is shown while your answer to your prompt is being
            generated
          </div>
        </div>
      ) : (
        promptResponses.map((promptResponse, index) => (
          <div key={index}>
            <div
              className={`response-text ${
                index === promptResponses.length - 1 ? "fw-bold" : ""
              }`}
            >
              {promptResponse}
            </div>
            //the latest response shown in bold letters
          </div>
        ))
      )}
    </div>
  );
}
export default GeminiInReact;
