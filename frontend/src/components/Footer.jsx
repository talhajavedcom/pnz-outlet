import React from 'react'
import Fcard from './../assets/Images/footer-cards.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
<footer className="footer">
  {/* Start Footer Top */}
  <div className="footer-top">
    <div className="container">
      <div className="inner-content">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12">
            <div className="footer-logo">
              <Link to="/">
              <img src="https://talhajaved.com/wp-content/uploads/2023/03/2.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <div className="footer-newsletter">
              <h4 className="title">
                Subscribe to our Newsletter
                <span>Get all the latest information, Sales and Offers.</span>
              </h4>
              <div className="newsletter-form-head">
                <form action="#" method="get" target="_blank" className="newsletter-form">
                  <input name="EMAIL" placeholder="Email address here..." type="email" />
                  <div className="button">
                    <button className="btn">Subscribe<span className="dir-part" /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Footer Top */}
  {/* Start Footer Middle */}
  <div className="footer-middle">
    <div className="container">
      <div className="bottom-inner">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer f-contact">
              <h3>Get In Touch With Us</h3>
              <p className="phone">Phone: +92 (305) 6468662</p>
              <ul>
                <li><span>Contact 24/7 </span> 10.00 am - 6.00 pm</li>
              </ul>
              <p className="mail">
                <Link to="mailto:contact@talhajaved.com">contact@talhajaved.com</Link>
              </p>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer our-app">
              <h3>Our Mobile App</h3>
              <ul className="app-btn">
                <li>
                  <Link to="/">
                    <i className="lni lni-apple" />
                    <span className="small-title">Download on the</span>
                    <span className="big-title">App Store</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="lni lni-play-store" />
                    <span className="small-title">Download on the</span>
                    <span className="big-title">Google Play</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer f-link">
              <h3>Information</h3>
              <ul>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Downloads</Link></li>
                <li><Link to="/">Sitemap</Link></li>
                <li><Link to="/">FAQs Page</Link></li>
              </ul>
            </div>
            {/* End Single Widget */}
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            {/* Single Widget */}
            <div className="single-footer f-link">
              <h3>Shop Departments</h3>
              <ul>
                <li><Link to="/">Computers &amp; Accessories</Link></li>
                <li><Link to="/">Smartphones &amp; Tablets</Link></li>
                <li><Link to="/">TV, Video &amp; Audio</Link></li>
                <li><Link to="/">Cameras, Photo &amp; Video</Link></li>
                <li><Link to="/">Headphones</Link></li>
              </ul>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="footer-bottom">
    <div className="container">
      <div className="inner-content">
        <div className="row align-items-center">
          <div className="col-lg-4 col-12">
            <div className="payment-gateway">
              <span>We Accept:</span>
            <img src={Fcard} alt="cards" />
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="copyright">
              <p>Designed and Developed by<Link to="https://talhajaved.com" rel="nofollow" target="_blank">Talha Javed</Link></p>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <ul className="socila">
              <li>
                <span>Follow Me On:</span>
              </li>
              <li><Link to="/"><i className="lni lni-facebook-filled" /></Link></li>
              <li><Link to="/"><i className="lni lni-twitter-original" /></Link></li>
              <li><Link to="/"><i className="lni lni-instagram" /></Link></li>
              <li><Link to="/"><i className="lni lni-google" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>

  )
}

export default Footer