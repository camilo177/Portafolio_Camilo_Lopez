import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-black min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-center text-2xl font-bold mb-4">{t('contact')}</h1>
            <section className="mb-2 flex justify-center">
                <input className="rounded-2xl py-2 px-3 bg-white focus:outline-none focus:shadow-outline w-full max-w-screen-lg" id="username" type="text" placeholder={t('nombreContact')} />
            </section>
            <section className="mb-2 flex justify-center">
                <input className="rounded-xl py-2 px-3 bg-white focus:outline-none focus:shadow-outline w-full max-w-screen-lg" id="lastname" type="text" placeholder={t('apellidoConatct')} />
            </section>
            <section className="mb-2 flex justify-center">
                <input className="rounded-xl py-2 px-3 bg-white focus:outline-none focus:shadow-outline w-full max-w-screen-lg" id="email" type="text" placeholder={t('emailContact')} />
            </section>
            <section className="mb-4 flex justify-center">
                <input className="h-44 rounded-xl py-2 px-3 focus:outline-none w-full max-w-screen-lg" id="message" type="text" placeholder={t('mensajeConatct')} />
            </section>
            <section className="flex items-center justify-center">
                <button className="bg-white hover:bg-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    {t('enviarContact')}
                </button>
            </section>
        </section>
    );
};

export default Contact;
