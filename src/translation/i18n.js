import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import EN from '../locales/en/translation';
import VI from '../locales/vi/translation';

// the translations
const resources = {
    en: {
        translation: EN
    },
    vi: {
        translation: VI
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;