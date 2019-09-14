import React, { Component } from "react";
import cn from "classnames";

import "./day-stat.sass";

class DayStat extends Component {
  render() {
    const { date, temp, icon, weather } = this.props;
    return (
      <div className={cn("day-stat")}>
        <div className={cn("day-stat__date-time")}>
          <span className={cn("day-stat__date")}>
            {date.toLocaleDateString()}
          </span>
          <br />
          <span className={cn("day-stat__time")}>
            {date.toLocaleTimeString()}
          </span>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather"
        />
        <div className={cn("day-stat__temp")}>{Math.round(temp)}°C</div>
        <div className={cn("day-stat__weather")}>{weather}</div>
      </div>
    );
  }
}

export default DayStat;
