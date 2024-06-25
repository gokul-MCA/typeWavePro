import React, { useState, useEffect } from "react";
import styles from "./Sample.module.css";
import { SampleData } from "../../utils/data";

const Sample = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      localStorage.setItem("myData", value);
      window.location.reload();
    }
  }, [value]);

  return (
    <div className={styles.main}>
      {SampleData.map((item, id) => (
        <div key={id}>
          <input
            className={styles.btn}
            type="button"
            value={item.value}
            onClick={() => setValue(item.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Sample;
