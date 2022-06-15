import axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apikey = "48571143cbf4c6549c7ce57d24d91240";
  let lat = 40.7;
  let lon = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row">
      <div className="col">
        <div className="card h-100">
          <div className="Forecast-day">Day</div>
          <div className="Forecast-icon" size={20}>
            <WeatherIcon code="01d" />
          </div>
          <div className="Forecast-temp">
            <span className="max-temp">30°</span>
            <span className="min-temp">20° </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="Forecast-day">Day</div>
          <div className="Forecast-icon" size={20}>
            <WeatherIcon code="01d" />
          </div>
          <div className="Forecast-temp">
            <span className="max-temp">30°</span>
            <span className="min-temp">20° </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="Forecast-day">Day</div>
          <div className="Forecast-icon" size={20}>
            <WeatherIcon code="01d" />
          </div>
          <div className="Forecast-temp">
            <span className="max-temp">30°</span>
            <span className="min-temp">20° </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="Forecast-day">Day</div>
          <div className="Forecast-icon" size={20}>
            <WeatherIcon code="01d" />
          </div>
          <div className="Forecast-temp">
            <span className="max-temp">30°</span>
            <span className="min-temp">20° </span>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <div className="Forecast-day">Day</div>
          <div className="Forecast-icon" size={20}>
            <WeatherIcon code="01d" />
          </div>
          <div className="Forecast-temp">
            <span className="max-temp">30°</span>
            <span className="min-temp">20° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
