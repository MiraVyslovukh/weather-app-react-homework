import React from "react";
import "./Weather.css";

export default function Weather(props) {
  if (props.loaded)
    return (
      <div className="Weather">
        <div className="container">
          <h3>{props.city}</h3>
          <h5>Friday, 13:02</h5>
          <h5 class="capitalize font-weight-bold">{props.description}</h5>
          <div className="row">
            <div className="col-2 mt-2">
              <img
                src={`http://openweathermap.org/img/wn/${props.icon}.png`}
                style={{ display: "block", width: 70, margin: "0 auto" }}
                alt="{props.description}"
              />
            </div>

            <div className="col-4 mt-2 mb-3">
              <div className="temperature">
                <span class="temperature">{Math.round(props.temperature)}</span>
                <span class="unit">°C</span>
              </div>
            </div>
            <div className="col-6 mt-4 mb-3">
              <ul className="message">
                <li>
                  <strong>Humidity:</strong> {props.humidity}%
                </li>
                <li>
                  <strong>Wind:</strong> {props.wind}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
