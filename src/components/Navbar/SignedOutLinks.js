import React from "react";
import { LANDING_PAGE_ROUTE } from "../../routes";
import { NavLink } from "react-router-dom";
import "./SignedOutLinks.css";

const SignedOutLinks = () => {
  return (
    <div>
      <li>
        <NavLink
          to={LANDING_PAGE_ROUTE}
          className="custom-link"
          style={{ color: "black" }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={LANDING_PAGE_ROUTE}
          className="custom-link"
          style={{ color: "black" }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={LANDING_PAGE_ROUTE}
          className="custom-link"
          style={{ color: "black" }}
        >
          Support
        </NavLink>
      </li>
    </div>
  );
};

export default SignedOutLinks;
