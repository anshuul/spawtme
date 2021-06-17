import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";

class Links extends Component {
  render() {
    console.log(this.props);
    return (
      <Aux>
        <h1>Hello {this.props.match.params.id}!</h1>
      </Aux>
    );
  }
}

export default Links;
