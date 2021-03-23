import React from "react";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className="search">
      
        {/* {this.state.input} */}
        <input 
          type="text"
          id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <Button variant="info"
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </Button>
      </div>
    );
  }
}
export default Search;
