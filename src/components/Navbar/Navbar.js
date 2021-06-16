import SignedOutLinks from "./SignedOutLinks";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/logo.PNG";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper transparent z-depth-0 ">
        <div className="container">
          <Link
            to="/"
            className="brand-logo custom-title"
            style={{ color: "black" }}
          >
            <img
              src={Logo}
              alt="logo"
              height="50"
              className="navbar-notes-logo"
            />
          </Link>
          <a
            href="#"
            data-target="mobile-demo"
            className="sidenav-trigger custom-sidenav"
          >
            <i className="material-icons custom-menu">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <SignedOutLinks />
          </ul>
        </div>
      </nav>
      <ul className="sidenav sidenav-close" id="mobile-demo">
        {SignedOutLinks}
      </ul>
    </div>
  );
};

export default Navbar;
