import React, { Component, Fragment } from "react";
import HelloWorld from "./HelloWorld";

class HelloWorlds extends Component {
  render() {
    const a = 5;
    console.log(a);
    return (
      <Fragment>
        {this.props.helloworlds.map((helloworld) => (
          <HelloWorld
            key={helloworld.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onLike={this.props.onLike}
            helloworld={helloworld}
          />
        ))}
      </Fragment>
    );
  }
}

export default HelloWorlds;
