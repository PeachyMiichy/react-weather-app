import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="container-fluid content-row">
      <div className="row">
        <div className="col col-lg-6">
          <div className="card h-100">
            <div className="Forecast-day">Day</div>
            <div className="Forecast-icon">
              <WeatherIcon code="01d" />
            </div>
            <div className="Forecast-temp">
              <span className="min-temp">20°C </span>
              <span className="max-temp">30°C</span>
            </div>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="card h-100">
            <div className="Forecast-day">Day</div>
            <div className="Forecast-icon">
              <WeatherIcon code="01d" />
            </div>
            <div className="Forecast-temp">
              <span className="min-temp">20°C </span>
              <span className="max-temp">30°C</span>
            </div>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="card h-100">
            <div className="Forecast-day">Day</div>
            <div className="Forecast-icon">
              <WeatherIcon code="01d" />
            </div>
            <div className="Forecast-temp">
              <span className="min-temp">20°C </span>
              <span className="max-temp">30°C</span>
            </div>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="card h-100">
            <div className="Forecast-day">Day</div>
            <div className="Forecast-icon">
              <WeatherIcon code="01d" />
            </div>
            <div className="Forecast-temp">
              <span className="min-temp">20°C </span>
              <span className="max-temp">30°C</span>
            </div>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="card h-100">
            <div className="Forecast-day">Day</div>
            <div className="Forecast-icon">
              <WeatherIcon code="01d" />
            </div>
            <div className="Forecast-temp">
              <span className="min-temp">20°C </span>
              <span className="max-temp">30°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
