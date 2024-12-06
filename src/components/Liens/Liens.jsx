import React, { useState } from "react";
import reshotIconSend from "./LiensPictures/send.svg";
import guideMusE1 from "./LiensPictures/GuideMusée.webp";
import patisserie21 from "./LiensPictures/Patisserie2.webp";
import Sparks from "./LiensPictures/sparkles.png"
import EmailValidationPopup from "../EmailValidationPopup/EmailValidationPopup";
import EmailErrorPopup from "../EmailValidationPopup/EmailErrorPopup";
import handDown from "./LiensPictures/hand-down.png";
import "./styles/Liens.css";
import "./styles/styleguide.css";

export const AccrocheForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showValidationPopup, setShowValidationPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      try {
        const response = await fetch("http://localhost:5000/save-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.status === 200) {
          setMessage("Merci pour votre inscription !");
          setShowValidationPopup(true);
          setEmail(""); // Réinitialise le champ email
        } else if (response.status === 409) {
          setMessage("Cet email est déjà enregistré.");
          setShowErrorPopup(true);
        } else {
          setMessage("Une erreur est survenue. Veuillez réessayer.");
          setShowErrorPopup(true);
        }
      } catch (error) {
        setMessage("Impossible de contacter le serveur.");
        setShowErrorPopup(true);
      }
    } else {
      setMessage("Veuillez entrer une adresse email valide.");
      setShowErrorPopup(true);
    }
  };

  return (
    <div className="accroche-form">
      {/* Partie gauche */}
      <div className="image-muse">
        <img className="img" alt="Guide musée" src={guideMusE1} />
        <p className="text-wrapper">
          Une visite comme aucune autre au cœur du Louvre ? Un mélange de stand Up Comique & d’histoire de l’art. Un moment unique qui sera à coup sûr l’un des tes coups de cœur !
        </p>
      </div>

      {/* Contenu central */}
      <div className="content-center">
        <div className="guides">
          <p className="text-wrapper">
            Prêt(e) à faire découvrir tes passions, ta ville, ou ta région ?
            Rejoins notre communauté de guides locaux passionnés.
          </p>
          <div className="frame">
            <a
              href="mailto:contact@meetpe.fr?subject=Envoi%20de%20ma%20pépite"
              className="overlap-group"
            >
              <p className="button-text"><img src={Sparks} alt="Brillance" width="15" />On attend ta pépite ici <img src={Sparks} alt="Brillance" width="15" /><br /></p>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter">
          <p className="envie-d-tre-parmi">
          Notre histoire, c’est aussi la vôtre. Pour télécharger notre application avant tout le monde !
<br />
            <span className="subscribe-text">Tout commence ici </span>
            <br />
            <img className="hand" src={handDown} alt="Hand"/>
          </p>
          <form className="overlap-wrapper" onSubmit={handleSubmit}>
            <div className="overlap">
              <div className="mail-button">
                <div className="input-wrapper">
                  <div className="CTA" />
                  <input
                    type="email"
                    className="email-placeholder"
                    placeholder="Adresse E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="reshot-icon-send">
                <img alt="Envoyer" src={reshotIconSend} />
              </button>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </div>

      {/* Partie droite */}
      <div className="image-patisserie">
        <img className="img" alt="Pâtisserie" src={patisserie21} />
        <p className="text-wrapper">
          Envie d’une pause onctueuse et savoureuse ? Découvrez l’art de la pâtisserie à travers un moment d’échange gourmand en compagnie d’une cheffe passionnée. Une expérience de vie riche en sourire et saveurs qui émerveillera vos papilles. À savourer sans modération !
        </p>
      </div>

      {/* Popups */}
      {showValidationPopup && (
        <EmailValidationPopup onClose={() => setShowValidationPopup(false)} />
      )}
      {showErrorPopup && (
        <EmailErrorPopup onClose={() => setShowErrorPopup(false)} />
      )}
    </div>
  );
};

export default AccrocheForm;
