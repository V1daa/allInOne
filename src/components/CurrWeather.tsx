const CurrWeather = ({ data }) => {
  return (
    <div className="curr-weather-container">
      <h1 className="weather-city-name">{data.city}</h1>
      <h2 className="weather-description">{data.weather[0].description}</h2>
      <h1 className="curr-temp">{Math.round(data.main.temp)}°C</h1>
      <div className="weather-params">
        <div>
          <span className="param-label">Details:</span>
        </div>
        <div>
          <span className="param-label">Feels like</span>
          <span className="param-value">
            {Math.round(data.main.feels_like)}°C
          </span>
        </div>
        <div>
          <span className="param-label">Wind</span>
          <span className="param-value">{data.wind.speed} m/s</span>
        </div>
        <div>
          <span className="param-label">Humidity</span>
          <span className="param-value">{data.main.humidity}%</span>
        </div>
        <div>
          <span className="param-label">Pressure</span>
          <span className="param-value">{data.main.pressure} hPa</span>
        </div>
      </div>
      <img
        alt="weather"
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        className="weather-sun"
      />
    </div>
  );
};

export default CurrWeather;
