import React, { useState } from "react";
import "./TempUnit.css";

export default function TempUnit(props) {
  const [unit, setUnit] = useState("celcius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showC(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showF}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let F = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(F)}</span>
        <span className="unit">
          <a href="/" onClick={showC}>
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
