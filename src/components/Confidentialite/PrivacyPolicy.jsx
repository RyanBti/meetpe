import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // Assurez-vous d'inclure ce fichier CSS
import logoMeetPe from './socialPic/LogoMeetpeBlack.svg'; // Import du logo

const PrivacyPolicy = () => {
    // Scroll immédiat en haut de la page lorsque le composant est monté
    useEffect(() => {
        window.scrollTo(0, 0); // Positionne immédiatement en haut
    }, []);

    // Gestion des animations des sections
    useEffect(() => {
        const sections = document.querySelectorAll('.privacy-section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (

            <div className="privacy-container" id="top">
                {/* Logo en haut de la page */}
                <div className="privacy-logo-container">
                    <Link to="/">
                        <img src={logoMeetPe} alt="Logo MeetPe" className="privacy-logo" />
                    </Link>
                </div>

                <h1 className="privacy-title">Politique de confidentialité Meet People</h1>

                <div className="privacy-sections">
                    <div className="privacy-section">
                        <h2 className="privacy-section-title">Introduction</h2>
                        <p className="privacy-section-content">
                            Dans cette Politique de confidentialité, nous expliquons comment et pourquoi Meet People collecte et traite vos données personnelles. Meet People agissant en qualité de responsable du traitement. En ce qui concerne le traitement des données personnelles, Meet People se conforme à la législation et à la réglementations applicables, telles que le règlement général sur la protection des données (RGPD), et de la loi française sur l'exécution du RGPD et sur les télécommunications.
                        </p>
                        <p>Meet People fournit la présente Politique de confidentialité afin de vous informer de nos politiques et procédures en ce qui concerne la manière dont nous collectons et traitons vos données personnelles que nous recevons des utilisateurs de www.meetpeople.fr de nos services et de notre application pour appareils mobiles, quel que soit le mode d'utilisation ou d'accès. Les données personnelles sont toutes les informations qui vous identifient directement ou indirectement. "Directement" pourrait par exemple passer par un nom et prénom. "Indirectement" fait référence à votre position, vos envies de voyages ou vos préférences.</p>
                    </div>

                    {/* Ajoutez d'autres sections ici */}
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">1. Traitement des données personnelles</h2>
                    <p className="privacy-section-content">
                        Meet People collecte des informations lorsque vous utilisez notre application, créez un compte, ou interagissez avec d'autres utilisateurs.
                    </p>
                    <p>Les informations collectées sont utilisées pour faciliter la connexion entre voyageurs et guides locaux, personnaliser l'expérience utilisateur et améliorer nos services. Meet People s'engage à ne pas partager vos informations personnelles avec des tiers sans votre consentement, sauf dans les cas prévus par la loi.</p>
                    <p>
                        Nous pouvons traiter vos données personnelles aux fins suivantes : pour la fourniture de nos services Meet People. Par exemple, les données personnelles sont traitées afin de configurer votre compte, de vous permettre de réserver une expérience via notre app, et de soumettre des avis sur l'App ou des widgets tiers. À cette fin, Meet People traite les données personnelles suivantes : nom, prénom, numéro de téléphone, adresse électronique, adresse domiciliaire, adresse IP, données de profil du compte Meet People.
                    </p>
                    <p>
                        Meet People est autorisé à traiter des données personnelles à cette fin car cela est nécessaire pour l'exécution de l'accord contractuel entre les guides et les voyageurs.
                    </p>
                    <p>
                        Le Service client Meet People traite les données personnelles pour traiter les questions et demandes. Ce traitement est nécessaire pour fournir nos services. À cette fin, Meet People traite votre nom, votre adresse électronique et les informations de réservation. Meet People est autorisée à traiter des données personnelles à cette fin car cela est nécessaire pour l'intérêt légitime de Meet People (ou d'un tiers), essentiellement pour permettre à Meet People de répondre adéquatement aux questions, attentes et demandes.
                    </p>
                    <p>
                        Meet People traite des données personnelles ainsi que vos photos d’expériences à des fins de marketing.
                    </p>
                    <p>
                        À cette fin, Meet People traite les données personnelles suivantes : comportement sur le site Web, adresse IP, adresse électronique, adresse postale, numéro de téléphone, identifiants en ligne, informations de réservation, emplacement et informations du compte. Meet People est autorisée à traiter des données personnelles à cette fin lorsque les individus ont donné leur consentement ou lorsque Meet People a un intérêt légitime à traiter les données personnelles. Selon le fondement du traitement (intérêt légitime versus consentement), vous avez le droit de retirer votre consentement à tout moment ou avez le droit de vous opposer au traitement de vos données personnelles à des fins de marketing direct à tout moment. Le retrait ou l'exercice de votre droit d'opposition n'affectera pas la licéité du traitement antérieur au retrait ou à l'exercice du droit d'opposition.
                    </p>
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">2. Catégories de destinataires</h2>
                    <p className="privacy-section-content">
                        Il peut être nécessaire que Meet People divulgue vos données personnelles, que ce soit en vertu de la loi, éventuellement dans le cadre d'un litige, d'une procédure judiciaire et/ou à la demande des autorités publiques ou gouvernementales, à l'intérieur ou à l'extérieur de votre pays de résidence. Nous pouvons également divulguer vos informations personnelles si nous estimons que la divulgation est nécessaire ou appropriée à des fins d'application de la loi, de sécurité nationale ou pour prévenir ou stopper toute activité que nous pourrions considérer comme illégale, contraire à l'éthique ou pouvant faire l'objet de poursuites légales. Nous divulguerons toute information vous concernant à nos prestataires de services d'assurance si nous estimons que cela est nécessaire pour protéger les biens et les droits de Meet People ou d'un tiers, et/ou pour protéger la sécurité du public ou de toute personne.
                    </p>
                    <p>
                        Afin de fournir et d'améliorer nos services, nous partagerons des informations avec des tiers lorsque cela sera nécessaire. Si vous effectuez une réservation, Meet People partagera les informations suivantes vous concernant avec le guide : votre prénom et nom de famille, et un lien vers votre profil via notre messagerie Meet People. Ces informations permettront à notre guide de décider s'il souhaite confirmer ou rejeter la réservation.
                    </p>
                    <p>
                        En aucun cas, vos informations de facturation ne sont partagées avec un guide. Nous pouvons faire appel à des sociétés et à des individus tiers pour nous aider à améliorer ou à faciliter notre service, pour fournir le service en notre nom, pour effectuer des services liés à la plateforme, notamment mais sans s'y limiter : des services de maintenance, des services de détection de la fraude, la gestion de bases de données, des services d'analyse Web, des services de suivi et d'évaluation ou des services de paiement en ligne. Ces tiers peuvent avoir accès à vos informations personnelles. S'ils le font, vos informations sont toujours protégées par les modalités de notre Politique de confidentialité. Vous pouvez toujours retirer votre consentement à la réception de telles communications en envoyant un e-mail à <a href="mailto:contact@meetpe.fr?subject=Politique%20de%20confidentialité">contact@meetpe.fr</a>.
                    </p>

                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">3. Cookies</h2>
                    <p className="privacy-section-content">
                        Meet People collecte des informations lorsque vous utilisez notre application, créez un compte,
                        ou interagissez avec d'autres utilisateurs...
                    </p>
                    <p>
                        Meet People peut utiliser des cookies et des technologies similaires pour collecter des informations sur votre utilisation de l'application, améliorer la navigation, et personnaliser le contenu. Si vous avez des questions sur notre utilisation des cookies, veuillez contacter Meet People à l'adresse <a href="mailto:contact@meetpe.fr?subject=Politique%20de%20confidentialité">contact@meetpe.fr</a>
                    </p>
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">4. Vos droits et comment les exercer</h2>
                    <p className="privacy-section-content">
                        Nous respectons l'exercice des droits que vous avez en ce qui concerne les données personnelles que nous traitons ou utilisons. Vous pouvez demander l'accès ou une copie de vos données personnelles collectées et traitées par Meet People. Vous pouvez également demander la rectification et la suppression de données personnelles ou la limitation du traitement de vos données personnelles, s'il existe une raison valable.
                    </p>
                    <p>
                        Pour éviter les abus, nous pouvons vous demander de vous identifier.<br />

                        La loi détermine si vous pouvez exercer un certain droit dans une situation donnée. Vous devez donc garder à l'esprit que nous ne sommes pas toujours en mesure de satisfaire votre droit dans son intégralité.
                    </p>
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">5. Sécurité</h2>
                    <p className="privacy-section-content">
                        Meet People attache une grande importance à la protection de vos informations. Nous prenons les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles. Le site utilise un certificat SSL fiable pour veiller à ce que vos données personnelles ne tombent pas entre de mauvaises mains. En cas de violation de la sécurité, Meet People effectuera toutes les divulgations légalement requises concernant la violation et la confidentialité ou l'intégrité de vos données personnelles non cryptées stockées électroniquement, par e-mail ou par une publication sur le site et l’application sans délai déraisonnable, dans la mesure où cela est compatible avec les besoins légitimes des forces de l'ordre et les mesures nécessaires pour déterminer l'étendue de la violation et protéger l'intégrité des données.</p>
                </div>

                <div className="privacy-section">
                    <h2 className="privacy-section-title">6. Questions ou réclamations</h2>
                    <p className="privacy-section-content">
                        Si vous avez des questions ou des réclamations concernant le traitement de vos données personnelles, veuillez envoyer un e-mail à : <a href="mailto:contact@meetpe.fr?subject=Politique%20de%20confidentialité">contact@meetpe.fr</a>. Notre délégué à la protection des données se fera un plaisir de vous aider. Si vous estimez que vos droits ont été violés, vous pouvez également déposer une plainte auprès de la CNIL, l'autorité française de protection des données. Pour plus d'informations sur la protection des données personnelles, veuillez consulter le site web de la Cnil : <a href="https://cnil.fr/fr">https://cnil.fr/fr</a>.
                    </p>
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">7. Coordonnées Meet People</h2>
                    <p className="privacy-section-content">
                        SAS Meet People, 18 rue Drouot, 75 009 Paris, RCS de Paris 978 137 560.
                    </p>
                    <p>
                        <a href="mailto:contact@meetpe.fr?subject=Politique%20de%20confidentialité">contact@meetpe.fr</a>
                    </p>
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">8. Modifications de la politique de confidentialité</h2>
                    <p className="privacy-section-content">
                        Meet People se réserve le droit de mettre à jour sa politique de confidentialité. Notre communauté sera informée des modifications importantes, et leur consentement sera obtenu si nécessaire.
                    </p>
                </div>


                <div className="privacy-section">
                    <h2 className="privacy-section-title">9. Mineurs</h2>
                    <p className="privacy-section-content">
                        Meet People n'est pas destiné aux personnes de moins de 18 ans sans l’accompagnement de l’un des parents ou d’un majeur. Si nous découvrons que des informations ont été collectées auprès de mineurs sans consentement parental, nous prendrons des mesures pour supprimer ces informations.
                    </p>
                </div>
                <div className="privacy-section">
                    <h2 className="privacy-section-title">10. Autres Supports utilisés</h2>
                    <p className="privacy-section-content">
                        Meet People utilise Google, YouTube, Instagram, Facebook, Tik-Tok, ou LinkedIn veuillez consulter leurs politiques de confidentialité et conditions d'utilisations.
                    </p>
                </div>

                {/* Bouton de retour en haut */}
                <div className="back-to-top">
                    <a href="#top">Retour en haut</a>
                </div>
            </div>
            );
};

            export default PrivacyPolicy;
