// Imports React
import React from 'react';
// Creates functional component
const Header = props => {
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

// Adding default properties to header if we remove branding from our Header component in     app.js, the default property will be used.
Header.defaultProps = {
  branding: 'MyApp'
};

// Exports functional component (Component that won't have state)
export default Header;
