import React from "react";
import "./Weather.css";

export default function CurrWeather() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card left-card">
            <ul class="weather-forecast">
              <h1 id="location">France</h1>
              <img src="" id="tempIcon" />
              <li id="day">
                <strong>Thursday</strong>
              </li>
              <span id="date">16/12/2021</span>
              <li id="time">10:30AM</li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card right-card">
            <div class="card-body">
              <ul class="weather-forecast">
                <li id="currTemp">17</li>
                <span class="unit">
                  <a id="cel">°C</a> |<a id="fah">°F</a>
                </span>
                <li id="description"></li>
                <li>
                  Humidity: <span id="humidity">77</span>%
                </li>
                <li>
                  Wind: <span id="wind">10</span>km/hr
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
