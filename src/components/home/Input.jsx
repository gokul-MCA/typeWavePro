import React, { useContext } from "react";
import styles from "./Input.module.css";
import GeminiContext, { GeminiInReact } from "./PreInput";
import { useNavigate } from "react-router-dom";

function Input() {
  const {
    inputValue,
    handleInputChange,
    getResponseForGivenPrompt,
    promptResponses,
    loading,
  } = useContext(GeminiContext);
  const navigate = useNavigate();
  
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.modalOverlay}>
        <span className={styles.loader}></span>
      </div>
      ) : (
        <div className={styles.form}>
        <div className={styles.inputFields}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter the Topic you choose"
            className={styles.formControl}
          />
          <button
            onClick={async () => {
              await getResponseForGivenPrompt();
              if (localStorage.getItem("requestData")) {
                navigate("/typing");
              }
            }}
            className={styles.btn}
          >
            Go
          </button>
        </div></div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <GeminiInReact>
      <Input />
    </GeminiInReact>
  );
}
