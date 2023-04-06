import React, { useState } from "react";
import Weather from "./Weather";
import "./Engine.css";
import axios from "axios";

export default function Engine(props) {
  const [city, setCity] = useState("props.defaultCity");
  const [loaded, setLoaded] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let API_KEY = "2980ff43226d67e53abfcdb6d457dcc8";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    axios.get(url).then(function (response) {
      setLoaded(true);
      setTemperature(response.data.main.temp);
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setIcon(response.data.weather[0].icon);
    });
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Engine">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
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
        <Weather
          defaultCity="Lviv"
          city={city}
          temperature={temperature}
          description={description}
          humidity={humidity}
          wind={wind}
          icon={icon}
          loaded={loaded}
        />
      </div>
    </div>
  );
}
