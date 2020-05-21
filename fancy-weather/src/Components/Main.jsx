import React from "react";
import { Location } from "./Location";
import { CurrentForecast } from "./CurrentForecast";

export class Main extends React.Component {
  render() {
    return (
      <main className="header">
        <div className="wrapper main__wrapper">
          <Location/>
          <CurrentForecast/>
        </div>
      </main>
    );
  }
};

