import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translations/en/common.json';
import ar from './translations/ar/common.json';

i18n.use(initReactI18next).init({
  defaultNS: 'common',
  lng: 'ar',
  fallbackLng: ['ar'],
  resources: {
    en: {common: en},
    ar: {common: ar},
  },
});

export default i18n;
