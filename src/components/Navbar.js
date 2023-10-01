import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode.mode} bg-${props.mode.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <label className={`form-check-label mx-2 text-${props.mode.labelColor}`} htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="modeId"
              onClick={props.toggleMode}
            />
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
//isRequired don't gives error while we pass defaultProps like below,

//if we don't pass props then this values will set as default
// Navbar.defaultProps = {
//     title: "Text here",
//     aboutText: "About here"
// }