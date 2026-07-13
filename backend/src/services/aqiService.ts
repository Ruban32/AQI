import axios from "axios";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const fetchAQIData = async (
  lat: number,
  lon: number
) => {

  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const response = await axios.get(url);

  const air = response.data.list[0];

  return {
    aqi: air.main.aqi,
    components: air.components
  };
};
