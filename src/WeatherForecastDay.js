import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card h-100">
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon" size={20}>
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <div className="Forecast-temp">
        <span className="max-temp">{Math.round(props.data.temp.max)}° </span>
        <span className="min-temp">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
