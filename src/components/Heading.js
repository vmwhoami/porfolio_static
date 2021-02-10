import React from 'react';

const Heading = ({ white, color, bg }) => (
  <div className="header my-5">
    <h1 className="header__h1">
      {white}
      {' '}
      <span className="header__color">{color}</span>
      <span className="header__back">{bg}</span>
    </h1>
  </div>
);

export default Heading;
