import React, { Component } from "react";
import LinkCard from "../LinkCard/LinkCard";
import Aux from "../../../hoc/Auxiliary";
import { Link } from "react-router-dom";
import FacebookIcon from "../../../assets/Facebook.png";
import "./LinkSummary.css";

class LinkSummary extends Component {
  state = {
    links: [
      { id: "1", social: "Facebook", socialUsername: "Anshul Tated" },
      { id: "1", social: "Facebook", socialUsername: "Anshul Tated" },
      { id: "1", social: "Facebook", socialUsername: "Anshul Tated" },
      { id: "1", social: "Facebook", socialUsername: "Anshul Tated" },
      { id: "1", social: "Facebook", socialUsername: "Anshul Tated" },
      { id: "1", social: "Facebook", socialUsername: "Anshul Tated" },
    ],
  };

  render() {
    return (
      <Aux>
        {this.state.links &&
          this.state.links.map((link) => {
            return (
              <LinkCard
                socialImage={FacebookIcon}
                social={link.social}
                socialUsername={this.props.data.Response.username}
              />
            );
          })}
        <p className="after-links">Find More People In App</p>
        <a href={this.props.data.Response.deeplink} target="blank">
          <button className=" customButton2">
            Download
            {/* <i className="material-icons right">get_app</i> */}
          </button>
        </a>
      </Aux>
    );
  }
}

export default LinkSummary;
