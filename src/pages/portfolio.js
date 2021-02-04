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
      {portitems.map(({ id, title, body, subtitle, github_link, live_link, main_image, thumb_image }) => {
        return (
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-5">
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
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Portfolio;



//         <div className="post_content">
//             <div className="entry_header">
//                 <h3> <a clss="text-decoration-none" href="/portfolio/35">Mastering_Grid</a> </h3>
//             </div>
//             <div className="entry_content">
//                 <p> Use semantic HTML tags.
// Use CSS selectors corr...</p>
//             </div>
//         </div>
//     </article>
// </div>






//   <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-5">
//     <article className="post_container  ">
//         <div className="post_thumb ">
//            <a className="d-block position-relative overflow-hidden link_container" href="/portfolio/34">
//               <img className="img_fluid" src="https://raw.githubusercontent.com/vmwhoami/danceter/pre-development/app/assets/images/Screenshot_1.jpg">
// </a>        </div>
//         <div className="post_content">
//             <div className="entry_header">
//                 <h3> <a clss="text-decoration-none" href="/portfolio/34"> Capstone Project</a> </h3>
//             </div>
//             <div className="entry_content">
//                 <p> In this project I built Dance opinion applicati...</p>
//             </div>
//         </div>
//     </article>
// </div>






//   <div className="col-12 col-md-6 col-lg-4 col-xl-4 my-5">
//     <article className="post_container  ">
//         <div className="post_thumb ">
//            <a className="d-block position-relative overflow-hidden link_container" href="/portfolio/36">
//               <img className="img_fluid" src="https://raw.githubusercontent.com/vmwhoami/Trillo/work/img/Screenshot_Desktop.jpg">
// </a>        </div>
//         <div className="post_content">
//             <div className="entry_header">
//                 <h3> <a clss="text-decoration-none" href="/portfolio/36">Trillo</a> </h3>
//             </div>
//             <div className="entry_content">
//                 <p> Built using CSS/SCSS flexbox  Media queries wer...</p>
//             </div>
//         </div>
//     </article>
// </div>





//     </div>
// </div>