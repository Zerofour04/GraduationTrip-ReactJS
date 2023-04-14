import React, { useState, useEffect } from "react";
import { FiSun, FiCloud, FiCloudRain, FiCloudSnow, FiWind } from "react-icons/fi";
import { IconContext } from "react-icons";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?id=3192224&cnt=1&appid=47e51299e3d061234371dc3b524ea1c9"
      );
      const data = await res.json();
      setWeatherData(data.list[0]);
    };
    fetchData();
  }, []);

  const weatherIcon = (weather) => {
    switch (weather) {
      case "Clouds":
        return <FiCloud />;
      case "Rain":
        return <FiCloudRain />;
      case "Snow":
        return <FiCloudSnow />;
      default:
        return <FiSun />;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Aktuelles Wetter in Banjole:</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title mb-4">{new Date(weatherData.dt * 1000).toLocaleDateString("de-DE", { weekday: "long" })}</h5>
              <p className="card-text">{new Date(weatherData.dt * 1000).toLocaleDateString("de-DE", { day: "numeric", month: "long" })}</p>
              <IconContext.Provider value={{ size: "5em" }}>
                {weatherData.weather && weatherIcon(weatherData.weather[0].main)}
              </IconContext.Provider>
              <p className="card-text">Wetter: {weatherData.weather && weatherData.weather[0].description}</p>
              <p className="card-text">
                <FiWind />
                Wind: 
                {weatherData.wind && weatherData.wind.speed} m/s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
