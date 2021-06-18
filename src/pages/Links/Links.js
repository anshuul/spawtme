import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Axios from "axios";
import Error from "../Error/Error";
import "./Links.css";

class Links extends Component {
  state = {
    userDetails: "",
  };

  componentDidMount() {
    console.log("Started");
    Axios.get(
      `https://connect-test-api-dev.herokuapp.com/user/webpage/${this.props.match.params.id}`
    ).then((res) => {
      console.log(res);
      this.setState(
        {
          userDetails: res,
        }
        // () => {
        //   console.log(res);
        // }
      );
    });
  }

  render() {
    console.log("rendered");
    return (
      this.state.userDetails && (
        <Aux>
          <div className="custom-div-x">
            {this.state.userDetails.data.Response &&
              this.state.userDetails.data.Response.profileType}
          </div>
        </Aux>
      )
    );
  }
}

export default Links;
