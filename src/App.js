import React, { Component } from "react";
import Search from "./components/Search";
import Currentweather from "./components/Currentweather"
import Weathernext from "./components/Weathernext"
import FakeWeather from "./data/FakeWeather.json";


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
          <Currentweather/>
          <div className="weather-next24h">
            <Weathernext time={FakeWeather.list[0].dt_txt} icon={FakeWeather.list[0].weather[0].main} temp={FakeWeather.list[0].main.temp}/>
            <Weathernext time={FakeWeather.list[1].dt_txt} icon={FakeWeather.list[1].weather[0].main} temp={FakeWeather.list[1].main.temp}/>
            <Weathernext time={FakeWeather.list[2].dt_txt} icon={FakeWeather.list[2].weather[0].main} temp={FakeWeather.list[2].main.temp}/>
            <Weathernext time={FakeWeather.list[3].dt_txt} icon={FakeWeather.list[3].weather[0].main} temp={FakeWeather.list[3].main.temp}/>
            <Weathernext time={FakeWeather.list[4].dt_txt} icon={FakeWeather.list[4].weather[0].main} temp={FakeWeather.list[4].main.temp}/>
            <Weathernext time={FakeWeather.list[5].dt_txt} icon={FakeWeather.list[5].weather[0].main} temp={FakeWeather.list[5].main.temp}/>
            <Weathernext time={FakeWeather.list[6].dt_txt} icon={FakeWeather.list[6].weather[0].main} temp={FakeWeather.list[6].main.temp}/>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
