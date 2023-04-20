import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  const temperature = props.temperature;
  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="col-4 mt-2 mb-3">
        <div className="temperature">
          <span class="temperature">{Math.round(temperature)}</span>
          <span class="unit">
            °C |{" "}
            <a href="/" className="unselected" onClick={toFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (temperature * 9) / 5 + 32;
    return (
      <div className="col-4 mt-2 mb-3">
        <div className="temperature">
          <span class="temperature">{Math.round(fahrenheit)}</span>
          <span class="unit">
            <a href="/" className="unselected" onClick={toCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
