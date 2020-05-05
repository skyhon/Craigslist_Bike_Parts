import React, { Component } from "react";
import Like from "./common/like";

class HelloWorld extends Component {
  render() {
    return (
      <React.Fragment>
        <span style={{ backgroundColor: "pink" }}>
          Hello World {this.props.helloworld.count}
        </span>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => this.props.onIncrement(this.props.helloworld)}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => this.props.onDecrement(this.props.helloworld)}
          disabled={this.props.helloworld.count <= 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => this.props.onDelete(this.props.helloworld.id)}
        >
          Delete
        </button>
        <Like
          onLike={this.props.onLike}
          liked={this.props.helloworld.liked}
          helloworld={this.props.helloworld}
        />
        <br />
      </React.Fragment>
    );
  }
}

export default HelloWorld;
