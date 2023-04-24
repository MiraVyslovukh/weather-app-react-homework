import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="row">
      <div className="col">
        <div className="forecast-day">{day()}</div>
        <div className="forecast-icon">
          <img
            src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}.png`}
            title={props.forecast.weather[0].description}
            alt={props.forecast.weather[0].description}
            width="42"
          />
        </div>
        <div className="forecast-temperatures">
          <span className="forecast-max-temp">{maxTemp()}</span>
          <span className="forecast-min-temp">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
