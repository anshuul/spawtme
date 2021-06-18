import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Axios from "axios";
import Error from "../Error/Error";
import "./Links.css";
import User from "../../assets/user.png";
import LinkSummary from "./LinkSummary/LinkSummary";
import Closed from "../Closed/Closed";

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
            {/*  {this.state.userDetails.data.Response &&
              this.state.userDetails.data.Response.profileType} */}
            <div className="profile-div">
              <div className="profile-image">
                <div className="image-div">
                  <img
                    src={this.state.userDetails.data.Response.profile_picture}
                    alt=""
                    height="100"
                  />
                </div>
              </div>
              <div className="profile-name">
                <p className="name">
                  {this.state.userDetails.data.Response.name}
                </p>
                <p className="username">
                  {this.state.userDetails.data.Response.username}
                </p>
              </div>
            </div>
            <div className="social-div">
              {this.state.userDetails.data.Response.profileType == "open" && (
                <LinkSummary data={this.state.userDetails.data} />
              )}
              {this.state.userDetails.data.Response.profileType == "close" && (
                <Closed data={this.state.userDetails.data} />
              )}
            </div>
          </div>
        </Aux>
      )
    );
  }
}

export default Links;
