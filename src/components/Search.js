import React from "react";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'

import {default as fog} from "../img/weather-icons/fog.svg";
import {default as rain} from "../img/weather-icons/rain.svg";
import {default as snow} from "../img/weather-icons/snow.svg";
import {default as storm} from "../img/weather-icons/storm.svg";
import {default as clear} from "../img/weather-icons/clear.svg";
import {default as clouds} from "../img/weather-icons/clouds.svg";
import {default as unknown} from "../img/weather-icons/unknown.svg";
import {default as drizzle} from "../img/weather-icons/drizzle.svg";
import {default as mostlycloudy} from "../img/weather-icons/mostlycloudy.svg";
import {default as partlycloudy} from "../img/weather-icons/partlycloudy.svg";
import "./Search.css";
import { useState } from 'react';

function img (temp){
  
  console.log(temp);
  if(temp<300){return storm}
  if(temp>300 && temp<499){return drizzle}
  if(temp>500 && temp<599){return rain}
  if(temp>600 && temp<699){return snow}
  if(temp>700 && temp<799){return fog}
  if(temp=800){return clear}
  if(temp=801){return partlycloudy}
  if(temp>801 && temp<805){console.log(temp)}
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
      <div className="app">
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
        </div>
        
        {(typeof weather.main != "undefined") ? (
          <div className="main">
          
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
          <div className="weather-next24h">
            <div className="first3hours img">
              <div className="time"></div>
              <div className="icon"><img  alt="partlycloudy icon" /></div>
              <div className="temp"></div>
            </div>
            <div className="second3hours img"> 
              <div className="time">06:00</div>
              <div className="icon"><img src={mostlycloudy} alt="partlycloudy icon" /></div>
              <div className="temp">9°C</div>
            </div>
            <div className="thirdrd3hours img">
              <div className="time">09:00</div>
              <div className="icon"><img src={clear} alt="clear icon" /></div>
              <div className="temp">14°C</div>
            </div>
            <div className="fourth3hours img">
              <div className="time">12:00</div>
              <div className="icon"><img src={clear} alt="clear icon" /></div>
              <div className="temp">17°C</div>
            </div>
            <div className="fifth3hours img">
              <div className="time">15:00</div>
              <div className="icon"><img src={clear} alt="clear icon" /></div>
              <div className="temp">18°C</div>
            </div>
            <div className="sixth3hours img">
              <div className="time">18:00</div>
              <div className="icon"><img src={clear} alt="clear icon" /></div>
              <div className="temp">16°C</div>
            </div>
            <div className="seventh3hours img">
              <div className="time">21:00</div>
              <div className="icon"><img src={partlycloudy} alt="partlycloudy icon" /></div>
              <div className="temp">13°C</div>
            </div>
            </div>
          </div>
          
            
            
            ) : ('')}
            
      </div>
    );
  }

export default Api;
