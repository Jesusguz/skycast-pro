'use client';

import { useState } from 'react';
import { CITIES, TRANSLATIONS, getWeatherDescription } from './constants';
import { useWeather } from './hooks/useWeather';
import { DetailBox } from './components/DetailBox';
import { City, Language } from './types';

// Main View Controller
export default function WeatherDashboard() {
  const [selectedCity, setSelectedCity] = useState<City>(CITIES[0]);
  const [lang, setLang] = useState<Language>('es');

  // Custom Hook Implementation
  const { data, loading, error, refetch } = useWeather(selectedCity);

  const t = TRANSLATIONS[lang];

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = CITIES.find((c) => c.id === e.target.value);
    if (city) setSelectedCity(city);
  };

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <main style={styles.mainContainer}>
      <div style={styles.dashboardCard}>
        {/* Header Section */}
        <header style={styles.header}>
          <div style={styles.headerTop}>
            <h1 style={styles.title}>{t.appTitle}</h1>
            <button onClick={toggleLang} style={styles.langButton}>
              {t.changeLang}
            </button>
          </div>
          <p style={styles.subtitle}>{t.appSubtitle}</p>
        </header>

        {/* Controls Section */}
        <nav style={styles.nav}>
          <label style={styles.label}>{t.selectLabel}</label>
          <select
            value={selectedCity.id}
            onChange={handleCityChange}
            style={styles.select}
          >
            {CITIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.flag} {c.name}
              </option>
            ))}
          </select>
        </nav>

        {/* Dynamic Content Section */}
        <section style={styles.contentArea}>
          {loading ? (
            <div style={styles.centerState}>
              <div style={styles.spinner}></div>
              <p style={{ color: '#666' }}>{t.loading}</p>
            </div>
          ) : error ? (
            <div style={styles.centerState}>
              <p style={{ color: '#e74c3c' }}>⚠️ {t.errorMsg}</p>
              <button onClick={refetch} style={styles.retryButton}>
                {t.retryBtn}
              </button>
            </div>
          ) : data ? (
            <div style={styles.fadeIn}>
              <div style={styles.weatherMain}>
                <span style={styles.tempLarge}>{data.temperature}°</span>
                <span style={styles.conditionText}>
                  {getWeatherDescription(data.weathercode, lang)}
                </span>
              </div>

              <div style={styles.gridDetails}>
                <DetailBox label={t.wind} value={`${data.windspeed} km/h`} />
                <DetailBox label={t.lat} value={selectedCity.lat.toFixed(2)} />
                <DetailBox
                  label={t.long}
                  value={selectedCity.long.toFixed(2)}
                />
                <DetailBox label={t.time} value={data.time.split('T')[1]} />
              </div>
            </div>
          ) : (
            <p>{t.empty}</p>
          )}
        </section>

        <footer style={styles.footer}>
          <small>{t.footer}</small>
        </footer>
      </div>
    </main>
  );
}

// Styles Object (Encapsulated for portability in this demo)
const styles: any = {
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    padding: '20px',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
  dashboardCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '24px',
    padding: '30px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
  },
  header: {
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { margin: 0, fontSize: '26px', color: '#333', fontWeight: '800' },
  subtitle: {
    margin: '5px 0 0 0',
    color: '#666',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  langButton: {
    background: '#e0e0e0',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '25px',
  },
  label: { fontSize: '14px', fontWeight: '600', color: '#555' },
  select: {
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
    outline: 'none',
    width: '100%',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '12px',
  },
  contentArea: {
    minHeight: '260px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerState: { textAlign: 'center' },
  fadeIn: { width: '100%', animation: 'fadeIn 0.5s ease-in' },
  weatherMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
  },
  tempLarge: {
    fontSize: '72px',
    fontWeight: 'bold',
    color: '#2c5364',
    lineHeight: 1,
  },
  conditionText: {
    fontSize: '18px',
    color: '#555',
    marginTop: '10px',
    padding: '6px 16px',
    background: '#eef2f3',
    borderRadius: '20px',
    fontWeight: '500',
  },
  gridDetails: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  retryButton: {
    padding: '10px 20px',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #2c5364',
    borderRadius: '50%',
    margin: '0 auto 15px',
    animation: 'spin 1s linear infinite',
  },
  footer: {
    marginTop: '30px',
    textAlign: 'center',
    color: '#aaa',
    fontSize: '11px',
    borderTop: '1px solid #eee',
    paddingTop: '15px',
  },
};
