import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempUnit from "./TempUnit";

export default function CurrWeather() {
  const [city, setCity] = useState("Singapore");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    let apikey = "48571143cbf4c6549c7ce57d24d91240";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    //When city is submitted, the final updated city will be sent here
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    //When there is an input, city variable will update
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="card-deck">
          <div className="card">
            <div className="card-text">
              <ul className="weather-forecast">
                <li className="location">{weatherData.city}</li>
                <li id="day">
                  <FormattedDate date={weatherData.date} />
                </li>
                <WeatherIcon code={weatherData.iconUrl} />
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <ul className="weather-forecast">
                <TempUnit celsius={weatherData.temp} />
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind: <span id="wind">{weatherData.wind}</span>km/hr
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
