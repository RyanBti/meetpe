import React from "react";
import styles from "./footer.module.css"; // Correction du chemin ("/" en "./")
import facebookIcon from "./socialPic/facebook.svg";
import instagramIcon from "./socialPic/Insta.svg";
import tiktokIcon from "./socialPic/tiktok.svg";
import logoMeetPe from "./socialPic/LogoMeetpeBlack.svg";

function FooterMeetP() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Section des icônes sociales */}
        <div className={styles.socialSection}>
          <div className={styles.icons}>
            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
            <img src={tiktokIcon} alt="TikTok" className={styles.icon} />
          </div>
          <p className={styles.message}>
            Notre CM est parti tester l'appli... <br />
            On le récupère bientôt ! 🕶️
          </p>
        </div>

        {/* Logo central */}
        <div className={styles.logoWrapper}>
          <img src={logoMeetPe} alt="Logo MeetPe" className={styles.logo} />
        </div>

        {/* Adresse email */}
        <div className={styles.contactSection}>
          <p className={styles.contact}>contact@meetpe.fr</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterMeetP;
