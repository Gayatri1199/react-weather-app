import "./App.css";
import React, { useState } from "react";

const api = {
  key: "0bc5928264233db8b48bba366fac101a",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        // setQuery("");
        setWeather(result);
      });
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${date} ${month} ${year}`;
  };
  // let x=;
  return (
    <div className={`app ${weather?.main?.temp > 16 ? "warm" : "cold"}`}>
      <div className="weather-app-wrapper">
        <div className="image"></div>
        <div className="weather-section">
          <div className="temp">
            {weather?.main?.temp ? Math.round(weather?.main?.temp) : "0"} {}
            &deg; C
          </div>
          <div className="loacation">
            {weather?.name ? weather?.name : "Place Name"}
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
              onKeyPress={search}
            />
            <button onClick={() => search()}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="location-box">
            <span>
              Hi from,{" "}
              {weather?.sys?.country ? weather?.sys?.country : "Country Name"}
            </span>
          </div>
          <div className="weather-box">
            {/* <div className="weather">{weather?.weather[0]?.description}</div> */}
          </div>

          <div className="weather-icon">
            {weather?.main?.temp > 16 ? (
              <i class="fa-solid fa-sun"></i>
            ) : (
              <i class="fa-regular fa-snowflake"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
