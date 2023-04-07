import React, { useState } from "react";
import Weather from "./Weather";
import "./Engine.css";
import axios from "axios";

export default function Engine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("props.defaultCity");

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      date: "Friday, 13:00",
      newCity: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const API_KEY = "2980ff43226d67e53abfcdb6d457dcc8";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  if (!weatherData.loaded) {
    const API_KEY = "2980ff43226d67e53abfcdb6d457dcc8";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${API_KEY}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Engine">
      <div className="container my-container">
        <div className="row justify-content-center">
          <div className="col my-col mt-4">
            <form onSubmit={handleSubmit}>
              <input
                onChange={getCity}
                type="search"
                className="search-engine"
                placeholder="Type a city..."
                autoFocus="on"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
}
