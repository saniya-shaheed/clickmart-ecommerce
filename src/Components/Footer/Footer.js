import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer d-md-flex p-3">
        <div className="col-md-6 d-flex d-md-flex">
          <ul className="col-6 list-unstyled ">
            <li><Link to='/clickmart-ecommerce'> Home </Link></li>
            <li><Link to='/shop/menclothing'> Shop </Link></li>
            <li><Link to='/help'> Help </Link></li>
          </ul>
          <ul className="col-md-6 list-unstyled ">
            <li><Link to='/shippingAndDelivery'> Shipping & Delivery </Link></li>
            <li><Link to='/signInPage'> Returns & Replacement </Link></li>
          </ul>
        </div>
        <ul className="careers-contact-about col-md-3 col-6 list-unstyled">
        <li><Link to='/careers'> Careers </Link></li>
          <li><Link to='/about '> About </Link></li>
        </ul>
        <div className="copyright-section col-md-3 justify-content-md-end d-flex flex-column  text-end">
          <a href="" className=""> Terms & Conditions </a>
          &copy; {new Date().getFullYear()} clickmart.com
        </div>
      </div>
    </footer>
  );
}

export default Footer;
