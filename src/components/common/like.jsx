import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    return (
      <i
        className={this.props.liked ? classes : classes + "-o"}
        style={{ cursor: "pointer" }}
        onClick={() => this.props.onLike(this.props.helloworld)}
      />
    );
  }
}

export default Like;
