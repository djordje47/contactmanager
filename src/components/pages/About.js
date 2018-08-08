import React from 'react';

const About = props => {
  return (
    <div>
      <h1 className="display-4">About contact manager</h1>
      <p className="lead">Simple app to manage contacts.</p>
      <p className="text-secondary">Version 1.0.0</p>
      <p className="text-secondary">{props.match.params.id}</p>
    </div>
  );
};
export default About;
