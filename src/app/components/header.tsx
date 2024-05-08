import React from 'react';
import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';

const Header = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <header className='flex flex-row items-center justify-between p-4 bg-app-white'>
      <p>{t('title')}</p>

      <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block px-3 py-2 text-app-gray-black bg-app-white border border-app-gray-black rounded-lg focus:border-app-primary focus:ring-app-primary'
      >
        {languageData().map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
