import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import axios from 'axios'

import { Link, useParams } from 'react-router-dom';
const PortfolioItem = () => {
  let id = useParams();
  console.log(id);
  const url = `https://vmportapi.herokuapp.com/portfolio/`
  const [loading, setLoading] = useState(true);
  const [portitem, setPortItem] = useState([])

  const getPortItems = async () => {
    const items = await axios.get(url)
    setPortItem(items.data)
  }
  useEffect(() => {
    getPortItems()

  }, [])

  return (
    <div className="container">
      <Heading white="some page" color="me" bg="the page"
      />
    </div>
  );
}

export default PortfolioItem;