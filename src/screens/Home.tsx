import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import photo from "./../assets/photos/foto1.png";

const Home = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const desktopView = (
    <section className="grid grid-cols-2 h-screen w-screen">
      <section className="bg-gradient-to-r from-black to-blue-900 py-4 flex items-center justify-center h-screen">
        <section className='pl-10 text-left text-white'>
          <h1 className="text-6xl py-2 font-bold">Juan Camilo López</h1>
          <p className='py-2 text-2xl font-Raleway max-w-lg whitespace-pre-line leading-normal'>{t('textoPresent')}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/camilo177" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/juan-camilo-l%C3%B3pez-caicedo-a1781a184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>
      </section>
      <section className="bg-white flex flex-col items-center justify-end h-screen">
        <img className="h-[60vh] mb-0 w-auto" src={photo} alt="Portada" />
      </section>
    </section>
  );

  const mobileView = (
    <section className="grid grid-rows-2 lg:grid-cols-2 lg:h-screen">
      <section className="bg-black flex items-center justify-center lg:justify-end">
        <img className="lg:h-[60vh] lg:w-auto w-80 h-80" src={photo} alt="Portada" />
      </section>
      <section className="bg-gradient-to-r from-black to-blue-900 py-4 flex flex-col items-center lg:justify-center lg:items-start lg:py-0 lg:pl-10 lg:col-span-1">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl py-2 font-Raleway">{t('Bienvenido')}</h1>
          <h2 className="text-6xl py-2 font-bold">{t('Camilo Lopez')}</h2>
          <h2 className="py-2 text-5xl font-Montserrat font-normal">{t('Ingeniero de software')}</h2>
          <p className="py-2 text-2xl font-Raleway max-w-lg text-white whitespace-pre-line leading-normal">{t('textoPresent')}</p>
          <div className="mt-4 flex justify-center lg:justify-start space-x-5">
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
    </section>
  );

  return (
    <div>
      {isMobile ? mobileView : desktopView}
    </div>
  );
};

export default Home;
