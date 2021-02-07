import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { Github, Earth } from '../components/Svgs'
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
  const { title, subtitle, body, main_image, thumb_image, github_link, live_link } = portitem
  return (
    <div className="container">
      <Heading white="" color={title} bg="Portfolio"
      />
      <div className="portItemCont">
        <ImageOfItem thumb_image={main_image} />
        <div className="content">
          <em className="content__em">{subtitle} </em>
          <p>{body}</p>
          <h2>Technologies used</h2>
          <hr className="white-line " />
          <div className="links">


            <LiveLinks github_link={github_link} Github={Github} />
            <LiveLinks live_link={live_link} Earth={Earth} />
            <a target="_blank" className="links__container" href={live_link}>
              <span className="links__text">back to portfolios</span>
              <i className="links__icon">
              </i>
            </a>
          </div>
        </div>

      </div>
    </div >
  );
}

const LiveLinks = ({ live_link, github_link, Earth, Github }) => {
  return (
    <a target="_blank" className="links__container" href={live_link ? live_link : github_link}>
      <span className="links__text">{Earth ? "Live" : "Github"}</span>
      <i className="links__icon">
        {Earth ? <Earth /> : <Github />}
      </i>
    </a>
  )
}


const ImageOfItem = ({ thumb_image }) => {
  return (
    <div className="imgcontainer">
      <img className="imgcontainer__img " src={thumb_image} />
    </div>
  )
}


export default PortfolioItem;

