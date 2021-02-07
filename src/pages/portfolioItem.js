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
  const { title, subtitle, body, main_image, thumb_image, github_link, live_link } = portitem
  return (
    <div className="container">
      <Heading white={title} color="" bg="Portfolio"
      />
      <div className="portItemCont">
        <ImageOfItem thumb_image={thumb_image} />
        <div className="content">
          <em className="content__em">A simple website </em>
          <p>Use semantic HTML tags.
          Use CSS selectors correctly.
          Use HTML elements box model (margin, padding, width, height).
          Use industry-standard tools (flexbox) to place elements on the page.
          Ability to create UIs adaptable to different screen sizes using media-queries.
          Apply front-end best practices.
          Ability to create UIs adjusted to given designs.
          Strong English written and verbal communication.
          Ability to communicate information effectively to technical and non-technical people.
          Ability to translate business requirements into software solutions.
          Ability to work well in a fast-paced environment under deadlines.
Ability to perform tasks and complete projects with minimal supervision.</p>
        </div>

      </div>
    </div>
  );
}

const ImageOfItem = ({ thumb_image }) => {
  return (
    <div className="imgcontainer">
      <img className="imgcontainer__img " src={thumb_image} />
    </div>
  )
}


export default PortfolioItem;


{/* <div className="row mt-5">

 

<div className=" col-12 col-lg-6  ">
  <em className=" my-5 ">A simple website </em>
  <p>Use semantic HTML tags.
Use CSS selectors correctly.
Use HTML elements box model (margin, padding, width, height).
Use industry-standard tools (flexbox) to place elements on the page.
Ability to create UIs adaptable to different screen sizes using media-queries.
Apply front-end best practices.
Ability to create UIs adjusted to given designs.
Strong English written and verbal communication.
Ability to communicate information effectively to technical and non-technical people.
Ability to translate business requirements into software solutions.
Ability to work well in a fast-paced environment under deadlines.
Ability to perform tasks and complete projects with minimal supervision.</p>
  <h2>Technologies used</h2>
<hr className="white-line mr-5">
    HTML 
    CSS 
    SCSS 
     
     
     

  
<div className="links">

<a target="_blank" className="links__container" href="https://github.com/vmwhoami/Mastering_Grid">
<span className="links__text">Github</span>
<i className="links__icon">
<svg>
  <use xlink:href="#icon-github"></use>
</svg>
</i>
</a>
<a target="_blank" className="links__container" href="https://nostalgic-kilby-78f387.netlify.app/">
<span className="links__text">Live</span>
<i class="links__icon">
<svg>
  <use xlink:href="#icon-earth"></use>
</svg>
</i>
</a>




</div>
  
</div>
</div> */}