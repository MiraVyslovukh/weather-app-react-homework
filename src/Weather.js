import React from "react";
import "./App.css";

export default function Weather(props) {
  if (props.loaded)
    return (
      <div className="Weather">
        <div className="row justify-content-center">
          <div className="col my-col mt-4">
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}.png`}
              style={{ display: "block", width: 70, margin: "0 auto" }}
              alt="{props.description}"
            />
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col my-col mt-3 mb-3">
            <div className="message">
              <p>
                <strong>Temperature:</strong> {Math.round(props.temperature)}℃
              </p>
              <p>
                <strong>Description:</strong> {props.description}
              </p>
              <p>
                <strong>Humidity:</strong> {props.humidity}%
              </p>
              <p>
                <strong>Wind:</strong> {props.wind}km/h
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5 days">
          <div className="col my-col">
            <strong>Mon</strong>
          </div>
          <div className="col my-col">
            <strong>Tue</strong>
          </div>
          <div className="col my-col">
            <strong>Wed</strong>
          </div>
          <div className="col my-col">
            <strong>Thur</strong>
          </div>
          <div className="col my-col">
            <strong>Fri</strong>
          </div>
        </div>
        <div className="row justify-content-center mt-1 days">
          <div className="col my-col">22°C</div>
          <div className="col my-col">18°C</div>
          <div className="col my-col">24°C</div>
          <div className="col my-col">28°C</div>
          <div className="col my-col">22°C</div>
        </div>
      </div>
    );
}
