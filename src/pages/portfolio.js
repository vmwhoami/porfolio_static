import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Portfolio = () => {
  const url = 'https://vmportapi.herokuapp.com/portfolio'
  const [loading, setLoading] = useState(true);
  const [portitems, setPortimes] = useState([])

  const getPortItems = async () => {
    const items = await axios.get(url)
    setPortimes(items.data)
  }
  useEffect(() => {
    getPortItems()

  }, [])

  return (
    <div className="container">
      <Heading white="My" color="Portfolio" bg="Work"
      />
      <div className="grid-container">
        {portitems.map(({ id, title, body, subtitle, github_link, live_link, main_image, thumb_image }) => {
          return (
            <article key={id} className="post_container  ">
              <PostThumb thumb_image={thumb_image} id={id} />
              <PostContent title={title} body={body} />
            </article>
          )
        })}
      </div>
    </div>
  );
}

const PostThumb = ({ id, thumb_image }) => {

  return (
    <div className="post_thumb ">
      <Link to={`/portfolio/${id}`} className="link_container" >
        <img className="img_fluid" src={thumb_image} />
      </Link>
    </div>
  )

}

const PostContent = ({ id, title, body }) => {

  return (
    <div className="post_content">
      <div className="entry_header">
        <h3>
          <Link to={`/portfolio/${id}`} className="text-decoration-none" >{title}</Link>
        </h3>
      </div>
      <div className="entry_content">
        <p>{body} </p>
      </div>
    </div>
  )

}
export default Portfolio;


