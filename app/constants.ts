import { City, TranslationSchema, Language } from './types';

export const CITIES: City[] = [
  {
    id: 'cdmx',
    name: 'Ciudad de México',
    lat: 19.4326,
    long: -99.1332,
    flag: '🇲🇽',
  },
  { id: 'bog', name: 'Bogotá', lat: 4.711, long: -74.0721, flag: '🇨🇴' },
  {
    id: 'bue',
    name: 'Buenos Aires',
    lat: -34.6037,
    long: -58.3816,
    flag: '🇦🇷',
  },
  { id: 'mad', name: 'Madrid', lat: 40.4168, long: -3.7038, flag: '🇪🇸' },
  { id: 'nyc', name: 'New York', lat: 40.7128, long: -74.006, flag: '🇺🇸' },
  { id: 'tok', name: 'Tokyo', lat: 35.6762, long: 139.6503, flag: '🇯🇵' },
];

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  es: {
    appTitle: 'SkyCast Pro',
    appSubtitle: 'Panel de Control Meteorológico',
    selectLabel: 'Ubicación actual:',
    loading: 'Sincronizando satélite...',
    errorMsg: 'Error de conexión con Open-Meteo.',
    retryBtn: 'Reintentar',
    wind: 'Viento',
    lat: 'Latitud',
    long: 'Longitud',
    time: 'Hora Local',
    footer: 'Datos provistos por Open-Meteo API v1',
    empty: 'Sin datos disponibles',
    changeLang: '🇺🇸 EN',
  },
  en: {
    appTitle: 'SkyCast Pro',
    appSubtitle: 'Weather Control Panel',
    selectLabel: 'Current Location:',
    loading: 'Synchronizing satellite...',
    errorMsg: 'Connection error with Open-Meteo.',
    retryBtn: 'Retry',
    wind: 'Wind',
    lat: 'Latitude',
    long: 'Longitude',
    time: 'Local Time',
    footer: 'Data provided by Open-Meteo API v1',
    empty: 'No data available',
    changeLang: '🇪🇸 ES',
  },
};

/**
 * Maps WMO weather codes to human-readable strings based on locale.
 */
export const getWeatherDescription = (code: number, lang: Language): string => {
  const isEs = lang === 'es';
  switch (true) {
    case code === 0:
      return isEs ? 'Cielo Despejado ☀️' : 'Clear Sky ☀️';
    case code >= 1 && code <= 3:
      return isEs ? 'Parcialmente Nublado ⛅' : 'Partly Cloudy ⛅';
    case code >= 45 && code <= 48:
      return isEs ? 'Neblina 🌫️' : 'Foggy 🌫️';
    case code >= 51 && code <= 67:
      return isEs ? 'Llovizna / Lluvia 🌧️' : 'Drizzle / Rain 🌧️';
    case code >= 71:
      return isEs ? 'Nieve ❄️' : 'Snow ❄️';
    case code >= 95:
      return isEs ? 'Tormenta Eléctrica ⚡' : 'Thunderstorm ⚡';
    default:
      return isEs ? 'Condiciones variables' : 'Variable conditions';
  }
};
