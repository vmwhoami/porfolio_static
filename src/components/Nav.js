import React from 'react'
import { Home, Suitcase } from './Svgs'



class Nav extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <nav className="mynav">
        <a className="mynav__link" href="">
          <i className='mynav__icon'>
            <Home />
          </i>
          <a class="mynav__link__a" href="/">Home</a>
        </a>
        <a className="mynav__link" href="">
          <i className='mynav__icon'>
            <Suitcase />
          </i>
          <a class="mynav__link__a" href="/portfolio">Portfo</a>
        </a>


      </nav>
    )
  }
}

export default Nav