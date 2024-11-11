import React from "react";
import styles from "./Loading.module.scss"; // Import your CSS module

const Loading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
      <p className={styles.loadingMessage}>Loading weather data...</p>
    </div>
  );
};

export default Loading;