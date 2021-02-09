import React from 'react';
import { Envelope, Phone } from '../components/Svgs'
import SocialLinks from '../components/SocialLinks'
import Heading from '../components/Heading';

const Contact = () => {
  return (
    <div className="container">
      <Heading white="get in" color="touch" bg="contact"
      />

      <div className="row contact__container">
        <h3 className="text-uppercase contact__title ">Don't be shy !</h3>
        <p className="mb-3">Get in touch I am open to discuss new projects and ideas. </p>

        <div className="contact position-relative">
          <i className="contact__icon">
            <Envelope />
          </i>
          <div className="contact__details">
            <p>mail me:</p>
            <p>vmwhoami@gmail.com</p>
          </div>
        </div>


        <div className="contact position-relative">
          <i className="contact__icon">
            <Phone />
          </i>
          <div className="contact__details">
            <p>call me:</p>
            <p> +373 69442476</p>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div >
  );
}

export default Contact;




//       <!-- Contact Form Starts -->
//       <div className="col-12 col-lg-8">
//          <!--   Form St -->

//          <form className="contact_form" action="/contact" accept-charset="UTF-8" data-remote="true" method="post"><input type="hidden" name="authenticity_token" value="n2zUJ7Ko8kqftPfbOchHLvnwfGzvSyvLkUpG0stq8Qk7UyXkr5AzE3q9QrXMhPbH3VOOY3m56D7hdCOi3mCK4g==">

//          <div className="contact_form">
//             <div className="row">
//                <div className="col-12 col-md-4">
//                   <input placeholder="YOUR NAME" type="text" name="contact[name]" id="contact_name">
//                </div>
//                <div className="col-12 col-md-4">
//                   <input placeholder="YOUR EMAIL" type="text" name="contact[email]" id="contact_email">

//                </div>
//                <div className="col-12 col-md-4">
//                   <input placeholder="YOUR SUBJECT" type="text" name="contact[subject]" id="contact_subject">

//                </div>
//                <div className="col-12">

//                   <textarea placeholder="YOUR MESSAGE" name="contact[message]" id="contact_message"></textarea>

//                   <button name="button" type="submit" className="contact__button">
//                   <span>Send Message</span>
//                   <i className="social__icon">
//                      <svg>
//                         <use xlink:href="#icon-paper-plane"></use>
//                      </svg>
//                   </i>
// </button>
//                </div>
//                <div className="col-12 form-message">
//                   <span className="output_message text-center font-weight-600 text-uppercase">

//                   </span>
//                </div>
//             </div>
//          </div>
// </form>         <!--   Form End -->
//       </div>
//       <!-- Contact Form Ends -->
//    </div>