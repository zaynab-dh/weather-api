import React, { Component } from "react";

import Api from "./components/Search";
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
         
         <div className="main">
          <Api handleInput={this.handleInputChange} />
          
         </div>
      </div>
    );
  }
}

export default App;
