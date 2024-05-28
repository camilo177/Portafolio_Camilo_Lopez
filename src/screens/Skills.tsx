import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ciencia from '../assets/icons/e2410fd09b9627769d82323fdd350a8d.png';
import desarrollo from '../assets/icons/pngtree-software-development-isometric-web-concept-png-image_11719509.png';
import ia from '../assets/icons/ia2.webp';

const Skills = () => {
  const { t } = useTranslation();
  const [, setCurrentIndex] = useState(0);
  const skills = [
    { title: t('Ciencia de datos'), image: ciencia },
    { title: t('Desarrollo de software'), image: desarrollo },
    { title: t('AI'), image: ia }
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1 >= skills.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 < 0 ? skills.length - 1 : prevIndex - 1));
  };

  return (
    <section className="bg-gradient-to-r from-black to-blue-900 min-h-screen flex flex-col items-center justify-center py-10 sm:py-12 relative">
      <h2 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold py-4">{t('Skills')}</h2>

      <button onClick={handlePrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 z-10">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="flex items-center justify-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-20">
          {skills.map((skill, index) => (
            <section key={index} className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4">
              <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center">
                <section className="pb-4 pt-2 text-white text-3xl font-semibold font-Raleway">
                </section>
                <img className="h-32 sm:h-48" src={skill.image} alt={skill.title} />
                <button className="mt-4 bg-gray-500 text-white rounded-full px-6 py-2">
                  {t(skill.title)}
                </button>
              </div>
            </section>
          ))}
        </section>
      </div>

      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2 z-10">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  );
};

export default Skills;
