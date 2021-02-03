import React from 'react';

class Heading extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div class="header my-5">
        <h1 class="header__h1">My <span class="header__color">portfolio</span>
          <span class="header__back">work</span>
        </h1>
      </div>
    )
  }
}

export default Heading;