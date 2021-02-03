import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Portfolio, User, Envelope, Blog } from './Svgs';
const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav_toggle" />
      <label className="navigation__button" htmlFor="nav_toggle">
        <span className="navigation__burger"></span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li class="navigation__item">
            <NavLink className="navigation__itemlink" to="/">
              <i className="navigation__icon">
                <Home />
              </i>
              <span className="navigation__item__span">Home</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

