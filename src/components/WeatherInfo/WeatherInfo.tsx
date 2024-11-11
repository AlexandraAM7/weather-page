import { IWeatherInfoProps } from "../../interfaces";
import styles from "./WeatherInfo.module.scss";

const WeatherInfo: React.FC<IWeatherInfoProps> = (props) => {
  // Destructure the necessary props from the props object
  const { humidity, realFeel, windSpeed, temperature, description } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.weatherShortInfo}>
        <h2>{`${Math.round(temperature)}°C`}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.info}>
        <span>Humidity </span>
        <span>{`${Math.round(humidity)}%`}</span>
      </div>
      <div className={styles.info}>
        <span>Real Feel </span>
        <span>{`${Math.round(realFeel)}°C`}</span>
      </div>
      <div className={styles.info}>
        <span>Wind Speed </span>
        <span>{`${Math.round(windSpeed)}(m/s)`}</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
