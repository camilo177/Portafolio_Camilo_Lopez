import { useTranslation } from 'react-i18next';

const Knowledge = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-black to-blue-900 w-screen min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-5xl text-white font-bold pt-20 sm:pb-20">{t('Knowledge')}</h2>
      <div className="flex flex-col items-center justify-center">
        {/* Primer Recuadro */}
        <div className="w-full sm:w-[90%] md:w-[45%] bg-gray-200 rounded-xl shadow-md p-8 mb-8">
          <h3 className="text-2xl text-center font-bold mb-4">{t('previos')}</h3>
          <ul className="text-lg sm:text-xl font-oswald text-black text-center">
            <li>
              {t('firstStudies')}<br />
              {t('firstAcademic')}<br />
              2022
            </li>
            <li>
              {t('secondStudies')}<br />
              {t('secondAcademic')}<br />
              2022
            </li>
            <li>
              {t('thirdStudies')}<br />
              {t('thirdAcademic')}<br />
              2024
            </li>
            <li>
              {t('quarterStudies')}<br />
              {t('quarterAcademic')}<br />
              2024
            </li>
          </ul>
        </div>
        
        {/* Segundo Recuadro */}
        <div className="w-full sm:w-[90%] md:w-[45%] bg-gray-200 rounded-xl shadow-md p-8">
          <h3 className="text-2xl text-center font-bold mb-4">{t('Experiencia Laboral')}</h3>
          <ul className="text-lg sm:text-xl font-oswald text-black text-center">
            <li>
              {t('Interno Administrativo')}<br />
              {t('Observatorio de Internacionalización Empresarial y Regional (OIER)')}<br />
              2022
            </li>
            <li>
              {t('Asistente de Investigación')}<br />
              {t('Institución Universitaria CEIPA')}<br />
              2023-2024
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
