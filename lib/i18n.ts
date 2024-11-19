import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // import the language detector

// Configure i18next
i18n
  .use(LanguageDetector) // use the language detector
  .use(initReactI18next) // integrate with React
  .init({
    resources: {
      en: {
        translation: {
          /* English translations */
        },
      },
      de: {
        translation: {
          /* German translations */
        },
      },
      // Add other languages here
    },
    fallbackLng: "en", // default language
    detection: {
      // You can customize the language detection settings here
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
  });

export default i18n;
