export type Language = 'es' | 'en';

export interface City {
  id: string;
  name: string;
  lat: number;
  long: number;
  flag: string;
}

export interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
  is_day: number;
  time: string;
}

export interface TranslationSchema {
  appTitle: string;
  appSubtitle: string;
  selectLabel: string;
  loading: string;
  errorMsg: string;
  retryBtn: string;
  wind: string;
  lat: string;
  long: string;
  time: string;
  footer: string;
  empty: string;
  changeLang: string; // Etiqueta dinámica
}
