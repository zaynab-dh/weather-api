import React, { Component } from "react";

import Api from "./components/Search";





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
      <>
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
         */}
         
         
          <Api handleInput={this.handleInputChange} />
          
       </>  
      
    );
  }
}

export default App;
