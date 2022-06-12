import "./App.css";
import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card outline">
          <Weather />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
