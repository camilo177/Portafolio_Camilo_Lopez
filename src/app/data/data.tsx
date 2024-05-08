type LanguageType = {
  label: string;
  code: string;
};

export const languageData = (): LanguageType[] => [
  { label: 'Español', code: 'es' },
  { label: 'Ingles', code: 'en' },
];

