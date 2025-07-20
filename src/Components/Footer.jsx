import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor:  '#ff69b4'  }} className="text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand & Description */}
          <div className="col-md-4 mb-4">
            <h4 className="text-warning">WaffleHome 🧇</h4>
            <p>Your go-to place for fresh, warm waffles and sweet delights. Made with love since 2024!</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 ">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/menu" className="text-white text-decoration-none">Menu</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> It'swaffletime123@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +91 98765 43210</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> Gems Complex, 515/1, Thenkalam Rd, opp. Canara Bank, Sankar Nagar, Thalaiyuthu, Tamil Nadu 627357 </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            </div>
          </div>

        </div>
        <hr className="bg-warning" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} WaffleHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
