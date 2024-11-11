export const makeWeatherRequest = async (url: string) => {
    try {
      const res = await fetch(url);
      return res.json();
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };