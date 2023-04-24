import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecast={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    const API_KEY = "2980ff43226d67e53abfcdb6d457dcc8";
    let lon = props.coordinates?.lon;
    let lat = props.coordinates?.lat;
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`;
    axios.get(url).then(handleResponse);
  }
}
