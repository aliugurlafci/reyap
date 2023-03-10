import i18n from 'i18next';
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './translations/en.json';
import tr from './translations/tr.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    resources: {
      en,
      tr,
    },
    nonExplicitWhitelist: true,
    debug: false,
  });

export default i18n;
