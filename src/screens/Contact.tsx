import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center w-full">
      <h1 className="text-white text-center text-2xl font-bold mb-4">{t('contact')}</h1>
      <section className="flex items-center justify-center">
        <a
          href="mailto:juanlopezca17@gmail.com?subject=&amp;body="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {t('enviarContact')}
        </a>
      </section>
    </section>
  );
};

export default Contact;
