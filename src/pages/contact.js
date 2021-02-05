import React from 'react';
import Heading from '../components/Heading';

const Contact = () => {
  return (
    <div className="container">
      <Heading white="get in" color="touch" bg="contact"
      />

      <div class="row contact__container">
        <h3 class="text-uppercase contact__title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
      </div>
    </div>
  );
}

export default Contact;


// <div class="row contact__container">
//       <!-- Left Side Starts -->
//       <div class="col-12 col-lg-4 mb-5">
//          <h3 class="text-uppercase contact__title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
//          <p class="mb-3">Get in touch I am open to discuss new projects and ideas. </p>
//          <div class="contact position-relative">
//             <i class="contact__icon">
//                <svg>
//                   <use xlink:href="#icon-envelope"></use>
//                </svg>
//             </i>

//             <div class="contact__details">
//                <p>mail me:</p>
//                <p>vmwhoami@gmail.com</p>
//             </div>
//          </div>

//          <div class="contact position-relative">

//             <i class="contact__icon">
//                <svg>
//                   <use xlink:href="#icon-phone"></use>
//                </svg>
//             </i>

//             <div class="contact__details">
//                <p>call me:</p>
//                <p> +373 69442476</p>
//             </div>

//          </div>

//          <div class="social">
//   <a target="_blank" class="social__link" href="https://www.linkedin.com/in/vitaliemelnic/">

//   <i class="social__icon">
//     <svg class="social__svg">
//       <use xlink:href="#icon-linkedin"></use>
//     </svg>
//   </i>
// </a>

//   <a target="_blank" class="social__link" href="https://github.com/vmwhoami">
//   <i class="social__icon">
//     <svg class="social__svg">
//       <use xlink:href="#icon-github"></use>
//     </svg>
//   </i>
// </a>
//   <a target="_blank" class="social__link" href="https://twitter.com/vmwhoami">
//   <i class="social__icon">
//     <svg class="social__svg">
//       <use xlink:href="#icon-twitter"></use>
//     </svg>
//   </i>
// </a>
// </div>
//       </div>
//       <!-- Left Side Ends -->



//       <!-- Contact Form Starts -->
//       <div class="col-12 col-lg-8">
//          <!--   Form St -->

//          <form class="contact_form" action="/contact" accept-charset="UTF-8" data-remote="true" method="post"><input type="hidden" name="authenticity_token" value="n2zUJ7Ko8kqftPfbOchHLvnwfGzvSyvLkUpG0stq8Qk7UyXkr5AzE3q9QrXMhPbH3VOOY3m56D7hdCOi3mCK4g==">

//          <div class="contact_form">
//             <div class="row">
//                <div class="col-12 col-md-4">
//                   <input placeholder="YOUR NAME" type="text" name="contact[name]" id="contact_name">
//                </div>
//                <div class="col-12 col-md-4">
//                   <input placeholder="YOUR EMAIL" type="text" name="contact[email]" id="contact_email">

//                </div>
//                <div class="col-12 col-md-4">
//                   <input placeholder="YOUR SUBJECT" type="text" name="contact[subject]" id="contact_subject">

//                </div>
//                <div class="col-12">

//                   <textarea placeholder="YOUR MESSAGE" name="contact[message]" id="contact_message"></textarea>

//                   <button name="button" type="submit" class="contact__button">
//                   <span>Send Message</span>
//                   <i class="social__icon">
//                      <svg>
//                         <use xlink:href="#icon-paper-plane"></use>
//                      </svg>
//                   </i>
// </button>
//                </div>
//                <div class="col-12 form-message">
//                   <span class="output_message text-center font-weight-600 text-uppercase">

//                   </span>
//                </div>
//             </div>
//          </div>
// </form>         <!--   Form End -->
//       </div>
//       <!-- Contact Form Ends -->
//    </div>