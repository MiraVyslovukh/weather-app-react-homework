import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function Weather(props) {
  const { loaded, newCity, description, icon, temperature, humidity, wind } =
    props.weatherData;
  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <h3>{newCity}</h3>
          <FormattedDate />
          <h5 class="text-capitalize font-weight-bold">{description}</h5>
          <div className="row">
            <div className="col-2 mt-2">{icon}</div>
            <Temperature temperature={temperature} />
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
