import "./App.css";
import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card outline">
          <Weather />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
