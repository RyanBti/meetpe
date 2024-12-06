import React, { useState, useEffect } from "react";
import desktopBackground from "./Pictures/FondMeetpeDesktop.webp";
import mobileBackground from "./Pictures/FondMeetpeMobile.png"; 
import logotype from "./Pictures/logomeetpe.png"; 
import Gplay from "./Pictures/Gplay.svg";
import Appstore from "./Pictures/appstore.svg";
import "./ComingSoon.css";

export const Construction = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isMobile ? mobileBackground : desktopBackground;

  return (
    <div>
      {/* Section principale */}
      <div className="construction">
        <div className="overlap-group">
          {/* Image de fond */}
          <img
            className="background-image"
            alt="Background"
            src={backgroundImage}
          />

          {/* Overlay sombre */}
          <div className="div" />

{/* Textes */}
<p className="text-wrapper">Votre prochaine aventure à portée de swipe</p>
<div className="text-wrapper-2">
    BIENTÔT SUR
    <img className="logos" src={Appstore} alt="Appstore" />
    & 
    <img className="logos" src={Gplay} alt="GooglePlay" />
</div>
          {/* Logo */}
          <img className="logotype" alt="Logotype" src={logotype} />
        </div>
      </div>
    </div>
  );
};

export default Construction;
