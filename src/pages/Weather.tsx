import { useState } from "react";
import CurrWeather from "../components/CurrWeather";
import Header from "../components/Header";
import Search from "../components/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../components/api";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
        console.log(weatherResponse);
        console.log(forecastResponse)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="search-container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      {currentWeather && <CurrWeather data={currentWeather} />}
    </>
  );
};

export default Weather;
