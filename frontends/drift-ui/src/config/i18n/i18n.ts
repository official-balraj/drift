// src/i18n.ts
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEN from "@/locales/en/translation.json"
import translationFR from "@/locales/fr/translation.json"

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // use this if a translation key is missing in the selected language
    interpolation: {
      escapeValue: false, // react already escapes values to prevent XSS
    },
  })

export default i18n
