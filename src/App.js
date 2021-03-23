import React, { Component } from "react";
import Search from "./components/Search";
import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mouhannad + Zaynab"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
         */}
         <Search handleInput={this.handleInputChange} />
        <div className="main">
          <div className="weather-row">
            <div className= "weather-icon"><img src={partlycloudy} alt="partlycloudy icon" /></div>
            <div className="weather-description">overcast clouds</div>
            <div className="temperature">
              <div className="temp-text">Temperature</div>
              <div className="temp-value">10° to 11°C</div>
            </div>
            <div className="weather-row-ph">
              <div className="humidity">
                <div className="humidity-text">Humidity</div>
                <div className="humidity-value">78%</div>
              </div>
              <div className="pressure">
                <div className="pressure-text">Pressure</div>
                <div className="pressure-value">1008.48</div>
              </div>
            </div>
          </div>
          <div className="weather-next24h">
            <div className="first3hours img">
              <div className="time">03:00</div>
              <div className="icon"><img src={partlycloudy} alt="partlycloudy icon" /></div>
              <div className="temp">8°C</div>
            </div>
            <div className="second3hours img">
              <div className="time">06:00</div>
              <div className="icon"><img src={partlycloudy} alt="partlycloudy icon" /></div>
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
      </div>
    );
  }
}

export default App;
