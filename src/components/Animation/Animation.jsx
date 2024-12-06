import React, { useEffect, useRef, useState } from 'react';
import './Animation.css';

import meetpeLogo from '../../../public/images/AnimationPicture/AppMeetPeLogo.webp';
import meetpeUser from '../../../public/images/AnimationPicture/AppMeetPeUser.webp';
import meetpeExp from '../../../public/images/AnimationPicture/AppMeetPeExp.webp';
import meetPeMatch from '../../../public/images/AnimationPicture/AppMeetPeMatch.webp';
import meetPeCreate from '../../../public/images/AnimationPicture/AppMeetPeCreate.webp';

function Animation() {
    const animationRef = useRef(null); // Référence pour le conteneur
    const [isAnimated, setIsAnimated] = useState(false); // État de déclenchement de l'animation

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true); // Active l'animation
                    observer.disconnect(); // Arrête d'observer après l'activation
                }
            },
            {
                root: null, // Fenêtre comme conteneur
                threshold: 0.75, // Déclenche lorsque 75% de l'élément est visible
            }
        );

        if (animationRef.current) {
            observer.observe(animationRef.current); // Commence à observer
        }

        return () => {
            if (animationRef.current) {
                observer.disconnect(); // Nettoie l'observateur
            }
        };
    }, []);

    return (
        <div className="carousel-container" ref={animationRef}>
            <div className="background-mask">
                <div className="mask-left"></div>
                <div className="mask-right"></div>
                <div className={`background ${isAnimated ? 'animate' : ''}`}>
                    <img src={meetpeExp} alt="Experience" className="side-photo left-photo" />
                    <img src={meetpeUser} alt="User" className="side-photo left-photo" />
                    <img src={meetpeLogo} alt="Logo" className="center-photo" />
                    <img src={meetPeMatch} alt="Match" className="side-photo right-photo" />
                    <img src={meetPeCreate} alt="Create" className="side-photo right-photo" />
                </div>
            </div>
        </div>
    );
}

export default Animation;
