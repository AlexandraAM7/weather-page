import { IWeatherAPI } from "../interfaces";

export const getWeatherAPI = ({ lat, lon, apiKey }: IWeatherAPI): string => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
};
