import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';
import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Header = () => {
  const { i18n, t } = useTranslation();
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

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Knowledge'];

  const desktopView = (
    <header className="h-14 flex justify-between items-center bg-gradient-to-r from-black to-blue-900 px-4">
      <div className="flex items-center">
        <select
          defaultValue={i18n.language}
          onChange={onChangeLang}
          className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          {languageData().map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <button key={item} className="text-white hover:text-gray-300">
            {t(item)}
          </button>
        ))}
        <button className="rounded-full bg-white w-[150px] h-[40px] py-1 text-center text-black flex items-center justify-center">
          {t('Contact')}
        </button>
      </nav>
    </header>
  );

  const mobileView = (
    <header className="h-auto flex flex-col bg-gradient-to-r from-black to-blue-900 px-4 py-2">
      <div className="flex justify-between items-center mb-2">
        <select
          defaultValue={i18n.language}
          onChange={onChangeLang}
          className="px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          {languageData().map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="bg-white w-[150px] h-[40px] py-1 text-center text-black flex items-center justify-center">
              {t('Menu')}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t('Menu')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navItems.map((item) => (
              <DropdownMenuItem key={item}>{t(item)}</DropdownMenuItem>
            ))}
            <DropdownMenuItem>{t('Contact')}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );

  return <div>{isMobile ? mobileView : desktopView}</div>;
};

export default Header;
