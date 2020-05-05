import React, { Component } from "react";

class Cities extends Component {
  render() {
    const { onCityChange, data } = this.props;
    const cities =
      data != null ? Array.from(new Set(data.map(el => el.Address))) : [];

    //return <h1>Cities</h1>;
    return cities.map((city, i) => (
      <button
        key={i}
        className="btn-primary m-2"
        onClick={() => onCityChange(city)}
      >
        {city}
      </button>
    ));
  }
}

export default Cities;
