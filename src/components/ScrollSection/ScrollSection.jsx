import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ScrollSection.css';

const sections = [
  {
    id: 1,
    title: " 1. Rencontres Authentiques",
    content: "Chez Meet People on te connecte avec des guides locaux enthousiastes qui partageront avec toi leur culture, leur ville, leur région, et leurs passions ! Laisse-toi guider par ceux qui y vivent !"
  },
  {
    id: 2,
    title: " 2. Des Moments Qui Comptent",
    content: "Chaque voyage, chaque weekend, chaque déplacement, laisse toujours une trace chez chacun d’entre nous ! Avec Meet People, cette trace est aussi humaine et pas seulement dans tes storys Instagram !"
  },
  {
    id: 3,
    title: " 3. L’Exploration Vraie",
    content: "Le monde est vaste, riche de découvertes au-delà des itinéraires classiques. Meet People, c’est une porte ouverte sur des aventures hors des sentiers battus, celles qui te laisseront un sentiment d’appartenance partout où tu poseras tes pieds."
  },
  {
    id: 4,
    title: " 4. La Cerise Sur Le Gâteau",
    content: "Toutes ces rencontres, ces histoires et ces expériences sont pensées spécialement pour toi, en fonction de ce qui te fait vibrer ! Plus besoin de passer des heures à chercher les pépites de ta destination : on apprend à te connaître pour te proposer des moments de vie qui te ressemblent, et te connecter avec ceux qui partagent tes passions."
  },
];

const ScrollSections = () => {
  return (
    <div className="scroll-sections">
      <h1>Réinventons nos voyages ensemble :</h1>
      <div className="sections-container">
        {sections.map((section) => (
          <Section key={section.id} title={section.title} content={section.content} />
        ))}
      </div>
    </div>
  );
};

const Section = ({ title, content }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`section ${inView ? "visible" : "hidden"}`}>
      <h2 className="section-title">{title}</h2>
      <p className="section-content">{content}</p>
    </div>
  );
};

export default ScrollSections;
