import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import axios from 'axios'

import { Link, useParams } from 'react-router-dom';
const PortfolioItem = () => {
  let { id } = useParams();

  const url = `https://vmportapi.herokuapp.com/portfolio/${id}`
  const [loading, setLoading] = useState(true);
  const [portitem, setPortItem] = useState([])

  const getPortItems = async () => {
    const item = await axios.get(url)
    setPortItem(item.data)
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