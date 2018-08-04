// Imports React
import React from 'react';
// Imports prop-types
import PropTypes from 'prop-types';

// Creates functional component
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
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
