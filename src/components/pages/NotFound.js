import React from 'react';

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4 mt-5">
        <span className="text-danger">404</span>
        Page Not Found
      </h1>
      <p className="text-secondary text-center mt-5">
        Ups, the page you are looking for does not exist! :(
      </p>
    </div>
  );
};

export default NotFound;
