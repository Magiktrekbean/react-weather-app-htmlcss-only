import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Please enter a city🌸🌸🌸" />
        <input type="submit" value="search🎀" />
      </form>

      <h1>New York</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
      </ul>

      <div className="container-fluid">
        <div className="row">
          <div className="col emoji">☁️</div>
          <div className="col">
            <ul>
              <li>Humidity: 80%</li>
              <li>Wind: 10 km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="temp">
        19
        <span className="unit">
          <a href="http://">C</a>|<a href="http://">F</a>
        </span>
      </div>
    </div>
  );
}
