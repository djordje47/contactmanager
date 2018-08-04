// Imports React
import React from 'react';
// Creates functional component
const Header = props => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};
// Exports functional component (Component that won't have state)
export default Header;
