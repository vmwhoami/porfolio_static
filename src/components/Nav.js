import React from 'react';
import {
  Home, Portfolio, User, Envelope, Blog,
} from './Svgs';

const Nav = () => (
  <nav className="mynav">

    <a className="mynav__link" href="">
      <i className="mynav__icon">
        <Home />
      </i>
      <span className="mynav__link__a">Home</span>
    </a>

    <a className="mynav__link" href="">
      <i className="mynav__icon">
        <Portfolio />
      </i>
      <span className="mynav__link__a">Portfolio</span>
    </a>

    <a className="mynav__link" href="">
      <i className="mynav__icon">
        <User />
      </i>
      <span className="mynav__link__a">About-me</span>
    </a>

    <a className="mynav__link" href="">
      <i className="mynav__icon">
        <Envelope />
      </i>
      <span className="mynav__link__a">Contact</span>
    </a>

    <a className="mynav__link" href="">
      <i className="mynav__icon">
        <Blog />
      </i>
      <span className="mynav__link__a">Blog</span>
    </a>

  </nav>
);

export default Nav;
