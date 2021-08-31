import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "../_locales/en/translation.json";
import translationsFIL from "../_locales/fil/translation.json";

export default function bootstrapI18n() {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      fallbackLng: "en",
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: translationsEN,
        },
        fil: {
          translation: translationsFIL,
        },
      },
    });
}
