import React, { useEffect } from "react";
import styles from "./EmailErrorPopup.module.css";

const EmailErrorPopup = ({ onClose, errorMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <span className={styles.headerText}>
            Erreur Adresse Mail <span className={styles.icon}>⛔</span>
          </span>
        </div>
        <p className={styles.message}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default EmailErrorPopup;
