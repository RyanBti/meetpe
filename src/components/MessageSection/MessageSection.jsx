import React, { useEffect, useRef, useState } from 'react';
import './MessageSection.css';
import Fonda from './assets/FondateurPhoto/PhotoFondateur.webp';
import phone from "./assets/emoji/phone.png"

const MessageSection = () => {
    const buttonRef = useRef(null);
    const [isAnimated, setIsAnimated] = useState(false);
    const [displayedText, setDisplayedText] = useState('');
    const messageText = "Le jour où j’ai décidé de tout quitter, je suis tombé sur cette citation d'Isaac Newton : « Les hommes construisent trop de murs et pas assez de ponts ». En lisant cette phrase, j’ai souri, et j’ai su que je consacrerai le reste de ma vie à essayer de bâtir des ponts, pour nous connecter les uns aux autres !";

    useEffect(() => {
        const handleScroll = () => {
            if (buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible) {
                    setIsAnimated(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isAnimated) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < messageText.length) {
                    setDisplayedText(messageText.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isAnimated]);

    return (
        <div className="message-section">
            <div className="content-container">
                <div className="profile">
                    <div className="circle-up">
                        <img
                            src={Fonda}
                            alt="Fondateur"
                            className="profile-image"
                        />
                    </div>
                    <p className="profile-text">Un message d'Alex, notre fondateur :</p>
                </div>

                <p className="message-text">
                    {displayedText}
                    <span className="cursor"></span>
                </p>
                <p className="cta-text">
                    On en discute ensemble ?
                </p>
                <div className="cta-container">
                    <a
                        href="https://calendly.com/lambert-alexandre33/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cta-button ${isAnimated ? 'animate' : ''}`}
                        ref={buttonRef}
                    >
                        Co-créer avec nous <img src={phone} alt="Calendrier" width="20" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MessageSection;
