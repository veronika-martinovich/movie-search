import React from "react";
import LocationName from "./LocationName";
import LocationDate from "./LocationDate";
import CurrentForecast from "./CurrentForecast";
import { openWeatherMapApiKey } from "../js/API/APIs";
import { clearWeatherData } from "../js/functions/clearWeatherData";
import { connect } from "react-redux";

class Main extends React.Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${openWeatherMapApiKey}`
        );
        const weather = await response.json();
        const clearedWeatherData = clearWeatherData(weather.list);
        console.log(weather.city.timezone, weather, clearedWeatherData);
        this.props.dispatch({
          type: "UPDATE_LOCATION_DATA",
          value: weather.city,
        },
        {
          type: "UPDATE_FIRST_LOCATION_TIMEZONE",
          value: weather.city.timezone,
        },
        {
          type: "UPDATE_WEATHER_DATA",
          value: clearedWeatherData,
        }
        )
      },
      (error) => {
        console.log(error);
      },
      {
        enableHighAccuracy: false,
      }
    );
  }

  render() {
    return (
      <main className="header">
        <div className="wrapper main__wrapper">
        <div className="location">
          <LocationName />
          <LocationDate />
        </div>
        <CurrentForecast />
        </div>
      </main>
    );
  }
}

export default connect(null, null)(Main);
