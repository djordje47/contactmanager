// Imports React
import React from 'react';
// Imports prop-types
import PropTypes from 'prop-types';
//
import { Link } from 'react-router-dom';

// Creates functional component
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link text-white">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Adding default properties to header if we remove branding from our Header component in     app.js, the default property will be used.
Header.defaultProps = {
  branding: 'MyApp'
};

// Validates the property Type this one must be string or we will get warning in the          console
Header.propType = {
  branding: PropTypes.string.isRequired
};

// Exports functional component (Component that won't have state)
export default Header;
