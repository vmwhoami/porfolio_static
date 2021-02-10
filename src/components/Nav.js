import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home, Portfolio, User, Envelope, Blog,
} from './Svgs';

const Nav = () => (
  <nav className="mynav">
    {/* Home link */}
    <NavLink className="mynav__link" to="/">
      <i className="mynav__icon">
        <Home />
      </i>
      <span className="mynav__link__a">Home</span>
    </NavLink>

    {/* Portfolio link */}
    <NavLink className="mynav__link" to="/portfolio">
      <i className="mynav__icon">
        <Portfolio />
      </i>
      <span className="mynav__link__a">Portfolio</span>
    </NavLink>

    {/* About me link */}
    {/* <NavLink className="mynav__link" to="/about">
        <i className="mynav__icon">
          <User />
        </i>
        <span className="mynav__link__a">About-me</span>
      </NavLink> */}

    {/* Contact link */}
    <NavLink className="mynav__link" to="/contact">
      <i className="mynav__icon">
        <Envelope />
      </i>
      <span className="mynav__link__a">Contact</span>
    </NavLink>
    {/* Blog link */}
    {/* <NavLink className="mynav__link" to="/blog">
        <i className="mynav__icon">
          <Blog />
        </i>
        <span className="mynav__link__a">Blog</span>
      </NavLink> */}

  </nav>
);

export default Nav;
