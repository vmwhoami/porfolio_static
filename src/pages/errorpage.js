import React from 'react';
import Heading from '../components/Heading';

const Errorpage = () => {
  return (
    <div className="container">
      <Heading white="A big" color="fat error" bg="error"
      />
      <Heading white=" The page does not exist" color="" bg=""
      />
    </div>
  );
}

export default Errorpage;