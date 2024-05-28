import { useState } from "react";
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

interface FormData {
  username: string;
  lastname: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    const templateParams = {
      from_name: `${formData.username} ${formData.lastname}`,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send('service_tspm7pg', 'template_oehbksm', templateParams, 'aU2gMZl8uL-tN8FSf')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      })
      .catch(err => {
        console.error('FAILED...', err);
        alert('Failed to send email.');
      });
  };

  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center w-full">
      <h1 className="text-white text-center text-2xl font-bold mb-4">{t('contact')}</h1>
      <section className="mb-2 flex justify-center w-full">
        <input
          className="rounded-2xl py-2 px-3 bg-white focus:outline-none focus:shadow-outline w-full max-w-screen-lg"
          id="username"
          type="text"
          placeholder={t('nombreContact')}
          value={formData.username}
          onChange={handleChange}
        />
      </section>
      <section className="mb-2 flex justify-center w-full">
        <input
          className="rounded-xl py-2 px-3 bg-white focus:outline-none focus:shadow-outline w-full max-w-screen-lg"
          id="lastname"
          type="text"
          placeholder={t('apellidoConatct')}
          value={formData.lastname}
          onChange={handleChange}
        />
      </section>
      <section className="mb-2 flex justify-center w-full">
        <input
          className="rounded-xl py-2 px-3 bg-white focus:outline-none focus:shadow-outline w-full max-w-screen-lg"
          id="email"
          type="email"
          placeholder={t('emailContact')}
          value={formData.email}
          onChange={handleChange}
        />
      </section>
      <section className="mb-4 flex justify-center w-full">
        <input
          className="h-44 rounded-xl py-2 px-3 focus:outline-none w-full max-w-screen-lg"
          id="message"
          type="text"
          placeholder={t('mensajeConatct')}
          value={formData.message}
          onChange={handleChange}
        />
      </section>
      <section className="flex items-center justify-center">
        <button
          className="bg-white hover:bg-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          {t('enviarContact')}
        </button>
      </section>
    </section>
  );
};

export default Contact;
