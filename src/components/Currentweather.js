import React, { useEffect } from "react"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"


function Currentweather() {
  return (
    <>
        
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
          
        
    </>
  )
}

export default Currentweather