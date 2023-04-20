import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const API_KEY = "2980ff43226d67e53abfcdb6d457dcc8";
  let lon = props.coordinates?.lon;
  let lat = props.coordinates?.lat;
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;
  axios.get(url).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thur</div>
          <div className="forecast-icon">
            <img src="weather.png" alt="description" width="32" />
          </div>
          <div className="forecast-temperatures">
            <span className="forecast-max-temp">19°</span>
            <span className="forecast-min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
