import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Portfolio, User, Envelope, Blog } from './Svgs';
const Navigation = () => {
  const [toggled, setToggle] = useState(false)
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav_toggle" />
      <label className="navigation__button" htmlFor="nav_toggle">
        <span className="navigation__burger"></span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">

          <li className="navigation__item">
            <NavLink className="navigation__itemlink" to="/">
              <i className="navigation__icon">
                <Home />
              </i>
              <span className="navigation__item__span">Home</span>
            </NavLink>
          </li>

          <li className="navigation__item">
            <NavLink className="navigation__itemlink" to="/portfolio">
              <i className="navigation__icon">
                <Portfolio />
              </i>
              <span className="navigation__item__span">Portfolio</span>
            </NavLink>
          </li>


          <li className="navigation__item">
            <NavLink className="navigation__itemlink" to="/about">
              <i className="navigation__icon">
                <User />
              </i>
              <span className="navigation__item__span">About-me</span>
            </NavLink>
          </li>

          <li className="navigation__item">
            <NavLink className="navigation__itemlink" to="/contact">
              <i className="navigation__icon">
                <Envelope />
              </i>
              <span className="navigation__item__span">Contact</span>
            </NavLink>
          </li>


          <li className="navigation__item">
            <NavLink className="navigation__itemlink" to="/blog">
              <i className="navigation__icon">
                <Blog />
              </i>
              <span className="navigation__item__span">blog</span>
            </NavLink>
          </li>


        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

