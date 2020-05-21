import React from "react";

export const CurrentForecast = () => {
  return (
    <div className="current-forecast">
      <div className="current-forecast__temperature">
        <div className="current-forecast__degrees">10</div>
        <span className="current-forecast__degrees-sign">°</span>
        <img className="current-forecast__icon"></img>
      </div>
      <div className="current-forecast__indicators">
        <div className="wind-speed">34 ms</div>
        <div className="wind-direction">WE</div>
        <div className="humidity">700Hm</div>
        <div className="pressure">700Hm</div>
      </div>
    </div>
  );
};


