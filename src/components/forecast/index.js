import React, { Component } from "react";
import cn from "classnames";
import queryString from "query-string";
import DayStat from "../day-stat/index.js";
import { url, requestParams } from "../../constants/request";
import "./forecast.sass";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      place: props.place
    };

    fetch(
      `${url}${queryString.stringify({ ...requestParams, q: props.place })}`
    ).then(response => {
      response.json().then(result => {
        this.setState({ forecast: result.list });
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.place !== this.state.place) {
      this.fetchForecast();
      this.setState({ place: nextProps.place });
    }
  }

  fetchForecast = () => {
    fetch(
      `${url}${queryString.stringify({
        ...requestParams,
        q: this.props.place
      })}`
    ).then(response => {
      response.json().then(result => {
        this.setState({ forecast: result.list });
      });
    });
  };

  render() {
    console.log(this.state.place);

    const { forecast } = this.state;
    return (
      <div className={cn("forecast")}>
        {forecast.map((day, dayId) => {
          return (
            <DayStat
              key={dayId}
              date={new Date(day.dt * 1000)}
              icon={day.weather[0].icon}
              temp={Math.round(day.main.temp)}
              weather={day.weather[0].description}
            ></DayStat>
          );
        })}
      </div>
    );
  }
}

export default Forecast;
