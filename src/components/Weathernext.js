import React, { Component } from "react"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import clear from "../img/weather-icons/clear.svg"

function Weathernext(props) {
  return (
    
        
            <div className="first3hours img">
              <div className="time">{props.time}</div>
              <div className="icon"><img src={require(`../img/weather-icons/${props.icon.toLowerCase()}.svg`)} alt="partlycloudy icon" /></div>
              <div className="temp">{props.temp}</div>
            </div>
            
          
        
    
  )
}

export default Weathernext

{/* <div className="second3hours img"> 
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
            </div>*/}