import React, { Component } from "react";

class Cities extends Component {
  render() {
    const { onCityChange, data } = this.props;
    const cities =
      data !== null ? Array.from(new Set(data.map((el) => el.Address))) : [];
    return (
      <>
        <select
          id="select_city"
          onChange={(event) => {
            const city = event.target.value;
            onCityChange(city);
          }}
        >
          <option key={0} value="show all">
            Show All
          </option>
          {cities.map((city, i) => (
            <option key={i + 1} value={city}>
              {city
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </option>
          ))}
        </select>
      </>
    );
  }
}

export default Cities;
