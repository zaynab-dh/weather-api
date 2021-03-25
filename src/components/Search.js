import React from "react";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import fog from "../img/weather-icons/fog.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import clouds from "../img/weather-icons/clouds.svg";
import unknown from "../img/weather-icons/unknown.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import "./Search.css";
import { useState } from 'react';
const ap = {
  key: "5b32436ff4230918f547069b968b2d0b",
  base: "https://api.openweathermap.org/data/2.5/"
}
function img (temp){
  let a=Math.round(temp)
  console.log(temp);
  if(a<300){return require("../img/weather-icons/storm.svg")}
  if(a>300 && a<499){return require("../img/weather-icons/drizzle.svg")}
  if(a>500 && a<599){return require("../img/weather-icons/rain.svg")}
  if(a>600 && a<699){return require("../img/weather-icons/snow.svg")}
  if(a>700 && a<799){return require("../img/weather-icons/fog.svg")}
  if(a=800){return require("../img/weather-icons/clear.svg")}
  if(a=801){return require("../img/weather-icons/partlycloudy.svg")}
  if(a>801 && a<805){return require("../img/weather-icons/mostlycloudy.svg")}
}
function Api() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const find = evt => {
    if (evt.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query},CA&appid=5b32436ff4230918f547069b968b2d0b`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
      });
    }
  }


  

 
    return (
      <div className="search">
      
        {/* {this.state.input} */}
        <input 
          type="text"
          id="input-name"
          onChange={e => setQuery(e.target.value)
          }
          value={query}
          onKeyPress = {find}
            
          
        />
        <Button variant="info"
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </Button>
        {(typeof weather.main != "undefined") ? (
          <div>
          <div className="weather-row">
          <div className= "weather-icon"><img src={img(weather.weather[0].id)} alt="partlycloudy icon" /></div> 
            <div className="weather-description">overcast clouds</div>
            <div className="temperature">
              <div className="temp-text">Temperature</div>
              <div className="temp-value">{parseInt((weather.main.temp)-273.15)}°c to {Math.ceil((weather.main.temp)-273.15)}°C</div>
            </div>
            <div className="weather-row-ph">
              <div className="humidity">
                <div className="humidity-text">Humidity</div>
                <div className="humidity-value">{Math.round(weather.main.humidity)}%</div>
              </div>
              <div className="pressure">
                <div className="pressure-text">Pressure</div>
                <div className="pressure-value">{Math.round(weather.main.pressure)}</div>
              </div>
            </div>
          </div>
         
            </div>
            ) : ('')}
      </div>
    );
  }

export default Api;
