import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import axios from 'axios'

const Portfolio = () => {
  const url = 'https://vmwhoamiportfolioapi.herokuapp.com/portfolio'
  const [loading, setLoading] = useState(true);
  const [portitems, setPortimes] = useState([])

  const getPortItems = async () => {
    const items = await axios.get(url)
    console.log(items.data);
    setPortimes(items.data)
  }
  useEffect(() => {
    getPortItems()

  }, [])

  return (
    <div className="container">
      <Heading white="My" color="Portfolio" bg="Work"
      />
      <div class="grid-container">
        {portitems.map(({ id, title, body, subtitle, github_link, live_link, main_image, thumb_image }) => {
          return (


            <article className="post_container  ">
              <div className="post_thumb ">
                <a className="d-block position-relative overflow-hidden link_container" >
                  <img className="img_fluid" src={thumb_image} />
                </a>
              </div>
              <div className="post_content">
                <div className="entry_header">
                  <h3> <a className="text-decoration-none" >{title}</a> </h3>
                </div>
                <div className="entry_content">
                  <p>{body} </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  );
}

export default Portfolio;


