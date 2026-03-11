import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import frFR from './fr.json'
import enUS from './en.json'
import esES from './es.json'
import deDE from './de.json'
import itIT from './it.json'
import ptPT from './pt.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frFR },
      en: { translation: enUS },
      es: { translation: esES },
      de: { translation: deDE },
      it: { translation: itIT },
      pt: { translation: ptPT },
    },
    lng: import.meta.env.VITE_DEFAULT_LANGUAGE || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
