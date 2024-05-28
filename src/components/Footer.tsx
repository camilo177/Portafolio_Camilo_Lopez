import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="flex items-center justify-between w-screen bg-gradient-to-r from-black to-blue-900 h-50 px-8 py-4 sm:px-16 sm:py-8">
            {/* Sección izquierda con el icono de cohete y el texto centrado verticalmente */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faRocket} className="text-white mr-2 text-2xl" /> {/* Ícono de cohete */}
                <div className="text-white text-xlfont-medium font-raleway leading-relaxed">
                    {t('hecho')}
                </div>
            </div>
            {/* Sección derecha con los iconos de GitHub y LinkedIn */}
            <div className="flex items-center">
                <a href="https://github.com/camilo177" target="_blank" rel="noopener noreferrer" className="text-white mr-4 text-xl">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/juan-camilo-l%C3%B3pez-caicedo-a1781a184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white text-xl">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </section>
    );
};

export default Contact;
