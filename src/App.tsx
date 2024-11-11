import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import sunImg from "./images/sun.svg";
import cloudImg from "./images/cloud.svg";
import { IWeatherInfo } from "./interfaces";
import { makeWeatherRequest } from "./requests";
import { useGeolocation } from "./hooks";
import { getWeatherAPI } from "./functions";
import Loading from "./components/Loading/Loading";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const { userLocation, error } = useGeolocation();

  const [allWeatherInfo, setAllWeatherInfo] = useState<IWeatherInfo | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  const isNiceWeather =
    allWeatherInfo && allWeatherInfo.temperature > 20 ? true : false;

  useEffect(() => {
    if (userLocation && apiKey) {
      const weatherAPI = getWeatherAPI({
        lat: userLocation.lat,
        lon: userLocation.lon,
        apiKey,
      });

      makeWeatherRequest(weatherAPI)
        .then((data) => {
          if (data && data.main) {
            setAllWeatherInfo({
              temperature: data.main.temp,
              realFeel: data.main.feels_like,
              humidity: data.main.humidity,
              cityName: data.name,
              country: data.sys.country,
              description: data.weather[0].description,
              windSpeed: data.wind.speed,
            });
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [userLocation, apiKey]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && allWeatherInfo && (
        <div className={styles.app}>
          <div className={styles.wrapper}>
            <h1
              className={styles.city}
            >{`${allWeatherInfo.cityName}, ${allWeatherInfo.country}`}</h1>
            <div className={styles.weatherImg}>
              <img src={isNiceWeather ? sunImg : cloudImg} alt="sunImg" />
            </div>
            <WeatherInfo
              humidity={allWeatherInfo.humidity}
              realFeel={allWeatherInfo.realFeel}
              windSpeed={allWeatherInfo.windSpeed}
              temperature= {allWeatherInfo.temperature}
              description= {allWeatherInfo.description}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
