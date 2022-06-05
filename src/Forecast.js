import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div clasName="row">
      <span className="card forecast-card">
        <div className="col forecast-col">
          <strong>Day</strong>
          <br />
          Date
        </div>
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">Max Temp° </span>
          <span className="weather-forecast-temperature-min">Min Temp°</span>
        </div>
      </span>
    </div>
  );
}
