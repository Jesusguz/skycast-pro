import { useState, useEffect, useCallback } from 'react';
import { City, WeatherData } from '../types';

export const useWeather = (selectedCity: City) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      // Artificial delay for UX perception
      await new Promise((resolve) => setTimeout(resolve, 600));

      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.long}&current_weather=true&timezone=auto`
      );

      if (!res.ok) throw new Error('API Response Error');

      const json = await res.json();
      if (!json.current_weather) throw new Error('Invalid Data Structure');

      setData(json.current_weather);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [selectedCity]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};
