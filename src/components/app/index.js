import React, { Component } from "react";
import Forecast from "../forecast/index.js";
import "./app.sass";

class App extends Component {
  state = {
    city: "Yekaterinburg, RU"
  };

  handlerChangeLocation = e => {
    this.setState({ city: e.target.value });
  };
  render() {
    const { city } = this.state;
    return (
      <div className="app">
        <h1>Forecast in {city}</h1>
        <Forecast place={city}></Forecast>
        <select onChange={this.handlerChangeLocation}>
          <option value="Yekaterinburg, RU">Yekaterinburg</option>
          <option value="Moscow, RU">Moscow</option>
        </select>
      </div>
    );
  }
}

export default App;
