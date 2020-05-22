import React from "react";
import { connect } from "react-redux";

class CurrentForecast extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.weatherData) return '';
    return (
      <div className="current-forecast">
        <div className="current-forecast__temperature">
    <div className="current-forecast__degrees">{this.props.weatherData[0].main.temp}</div>
          <span className="current-forecast__degrees-sign">°</span>
          <img className="current-forecast__icon"></img>
        </div>
        <div className="current-forecast__indicators">
          <div className="weather">{this.props.weatherData[0].weather.main}</div>
          <div className="feels-like">Feels like: {this.props.weatherData[0].main.temp}</div>
          <div className="wind">Wind: {this.props.weatherData[0].main.temp}</div>
          <div className="humidity">Humidity: {this.props.weatherData[0].main.pressure}</div>
        </div>
      </div>
    );
  }
 
};

const mapStateToProps = (state) => {
  return {
    language: state.language,
    weatherData: state.weatherData,
  };
};

export default connect(mapStateToProps, null)(CurrentForecast);



