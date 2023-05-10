import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className='footer-subscription'>
          <h4 className='mb-3'>
            Join the Adventure newsletter to receive our best vacation deals
          </h4>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input className='footer-input' name='email' type='email' placeholder='Your Email' />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="row footer-links">
          <div className="col-12 col-md-6 col-xl-3">
            <div className='inner'>
              <h4>About Us</h4>
              <Link to='/'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="inner">
              <h4>Contact Us</h4>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="inner">
              <h4>Videos</h4>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="inner">
              <h4>Social Media</h4>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <Link to='/' className='logo'>TRVL <span><i className='fab fa-typo3' /></span></Link>
          <small className='website-rights'>TRVL © 2020</small>
          <div className="sosial-icons">
            <Link to='/'><i className='fab fa-facebook-f' /></Link>
            <Link to='/'><i className='fab fa-instagram' /></Link>
            <Link to='/'><i className='fab fa-youtube' /></Link>
            <Link to='/'><i className='fab fa-twitter' /></Link>
            <Link to='/'><i className='fab fa-linkedin' /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
