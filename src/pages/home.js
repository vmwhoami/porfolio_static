import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../assets/portfolio.jpg';
import { Portfolio } from '../components/Svgs';
import SocialLinks from '../components/SocialLinks';

const Home = () => (
  <main className="main">
    <div className="main__container">
      <div className="image">
        <img className="image__img" src={image} />
      </div>

      <div className="about">
        <div className="about__container">
          <p className="about__intro">Hi there! </p>
          <h1 className="about__heading">
            I'm
            <span className="about__name">Vitalie Melnic</span>
          </h1>
          <p className="about__description">
            I'm a Moldavian based developer focused on crafting clean &amp; user‑friendly experiences, I am
            passionate about building excellent software that improves the lives of those around me.
          </p>
          <NavLink className="mybutton" to="/portfolio">
            <span className="mybutton__span">Portfolio</span>
            <i className="mybutton__icon">
              <Portfolio />
            </i>
          </NavLink>
          <SocialLinks />
        </div>
      </div>
    </div>

  </main>
);

export default Home;
