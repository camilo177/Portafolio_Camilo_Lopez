import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import photo2 from "../assets/photos/foto2.png";

const About = () => {
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
      <section className="bg-black flex flex-col items-center justify-center h-screen">
        <section className="w-full text-center flex flex-col items-center">
          <h2 className="text-center text-white text-5xl font-bold">{t('SobreMi')}</h2>
          <p className="py-2 text-xl text-justify font-Raleway max-w-lg text-white whitespace-pre-line leading-normal">
            {t('textoSobre')}
          </p>
        </section>
      </section>
      <section className="bg-black flex flex-col items-center justify-center h-screen">
        <img className="w-auto h-auto max-w-md" src={photo2} alt="Portada" />
      </section>
    </section>
  );

  const mobileView = (
    <section className="grid grid-rows-2 lg:grid-cols-2 lg:h-screen">
      <section className="bg-black py-4 flex flex-col items-center lg:justify-center lg:items-start lg:py-0 lg:pl-10 lg:col-span-1">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold text-white">{t('SobreMi')}</h2>
          <p className="py-2 text-xl font-Raleway max-w-lg text-white whitespace-pre-line leading-normal">
            {t('textoSobre')}
          </p>
        </div>
      </section>
      <section className="bg-white flex items-center justify-center lg:justify-center">
        <img className="w-auto h-auto max-w-xs lg:max-w-md" src={photo2} alt="Portada" />
      </section>
    </section>
  );

  return (
    <div>
      {isMobile ? mobileView : desktopView}
    </div>
  );
};

export default About;
