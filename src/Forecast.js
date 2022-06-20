import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Forecast.css";

import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 6) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apikey = "48571143cbf4c6549c7ce57d24d91240";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
