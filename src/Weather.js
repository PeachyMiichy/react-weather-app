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
          <input
            type="search"
            placeholder="Enter a city..."
            className="input-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button type="button" className="btn btn-search">
            🔍
          </button>
          <button type="button" className="btn btn-my-location">
            🧭
          </button>
        </form>
        <div className="row">
          <div className="col-sm-6">
            <div className="card left-card">
              <ul className="weather-forecast">
                <h1 className="location">{weatherData.city}</h1>
                <li id="day">
                  <FormattedDate date={weatherData.date} />
                </li>
                <WeatherIcon code={weatherData.iconUrl} />
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card right-card">
              <div className="card-body">
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
