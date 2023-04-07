import React from "react";
import "./Weather.css";

export default function Weather(props) {
  const {
    loaded,
    newCity,
    date,
    description,
    icon,
    temperature,
    humidity,
    wind,
  } = props.weatherData;
  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <h3>{newCity}</h3>
          <h5>{date}</h5>
          <h5 class="text-capitalize font-weight-bold">{description}</h5>
          <div className="row">
            <div className="col-2 mt-2">
              <img
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                style={{ display: "block", width: 70, margin: "0 auto" }}
                alt="{props.description}"
              />
            </div>

            <div className="col-4 mt-2 mb-3">
              <div className="temperature">
                <span class="temperature">{Math.round(temperature)}</span>
                <span class="unit">°C</span>
              </div>
            </div>
            <div className="col-6 mt-4 mb-3">
              <ul className="message">
                <li>
                  <strong>Humidity:</strong> {humidity}%
                </li>
                <li>
                  <strong>Wind:</strong> {wind}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
