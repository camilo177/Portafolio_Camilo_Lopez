import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import imagen from '../assets/icons/project.png';

const Projects = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const projects = [
    { title: t('project1'), description: t('description1'), image: imagen },
    { title: t('project2'), description: t('description2'), image: imagen },
    { title: t('project3'), description: t('description3'), image: imagen }
  ];

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 3 >= projects.length ? 0 : prevIndex + 3));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 3 < 0 ? projects.length - 1 - (projects.length % 3) : prevIndex - 3));
  };

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center py-10 sm:py-12 relative">
      <h2 className="text-4xl text-white sm:text-5xl md:text-6xl font-bold py-4">{t('Projects')}</h2>

      <button onClick={handlePrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div className="flex items-center justify-center">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
          {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
            <section key={index} className="flex flex-col items-center justify-center w-full">
              <div className="bg-gray-300 rounded-lg p-4 flex flex-col items-center">
                <h3 className="pb-4 pt-2 text-black text-2xl font-semibold font-Raleway text-center">
                  {project.title}
                </h3>
                <img className="h-44 sm:h-48 w-full object-cover" src={project.image} alt={project.title} />
                <p className="mt-4 text-gray-700 text-center">
                  {project.description}
                </p>
              </div>
            </section>
          ))}
        </section>
      </div>

      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </section>
  );
};

export default Projects;
