import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import de from './translations/de.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      caches: [`cookie`],
      lookupCookie: `lng`,
      order: [`cookie`],
    },
    fallbackLng: `en`,
    interpolation: {
      escapeValue: false,
    },
    resources: { de, en },
  });

export default i18n;
