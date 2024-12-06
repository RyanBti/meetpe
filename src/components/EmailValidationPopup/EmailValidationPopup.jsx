import React, { useState, useEffect } from "react";
import styles from "./EmailValidationPopup.module.css";

const EmailValidationPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ferme la popup après 3 secondes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Appelle onClose pour supprimer la popup après l'animation de disparition
    if (!isVisible) {
      const removeTimer = setTimeout(() => {
        onClose();
      }, 500); // Durée de l'animation de fade out

      return () => clearTimeout(removeTimer);
    }

    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={`${styles.container} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
        <div className={styles.popup}>
          <div className={styles.header}>
            <span className={styles.headerText}>Adresse mail Validé ✅</span>
          </div>
          <p className={styles.message}>
            Tout est bon ! Tu feras partie de nos premiers utilisateurs,
            <br />
            et pour ça, cœur sur toi 🫶🏼🧡
          </p>
          <button onClick={closePopup} style={{ marginTop: "10px", padding: "5px 10px", border: "none", borderRadius: "5px", backgroundColor: "#ff4c00", color: "#fff", cursor: "pointer" }}>
            Fermer
          </button>
        </div>
      </div>
    )
  );
};

export default EmailValidationPopup;
