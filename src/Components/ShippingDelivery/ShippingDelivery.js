import React from "react";
import "./ShippingDelivery.css";
import { Link } from "react-router-dom";

function ShippingDelivery() {
  return (
    <div className="shipping-delivery pb-3">
      <div className="d-md-flex">
        <div className="col-md-2 pt-4">
          <div className="all-help-topics-container">
            <div className="p-3">
              <Link to="/help" className="all-help-topics w-100 d-flex p-2">
                {" "}
                &#10550; All Help Topics{" "}
              </Link>
              <ul className="all-help-topics-list list-unstyled p-3 d-none d-md-block pb-5">
                <li className="active">
                  {" "}
                  <a href=""> Shipping and Delivery </a>
                </li>
                <li className="">
                  {" "}
                  <a href=""> Order with Free Shipping </a>
                </li>
                <li className="">
                  {" "}
                  <a href=""> Courier Contact Information </a>
                </li>
                <li className="">
                  {" "}
                  <a href=""> Return Policies </a>
                </li>
                <li className="">
                  {" "}
                  <a href=""> Refunds </a>
                </li>
                <li className="">
                  {" "}
                  <a href=""> Cash on Delivery </a>
                </li>
                <li className="">
                  {" "}
                  <a href=""> Account Settings </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8 ps-3">
          <h2 className="p-5 pb-3 ps-0 pt-2 pt-md-5">
            {" "}
            Shipping and Delivery{" "}
          </h2>
          <hr className="col-11" />
          <div className="track-package">
            <div className="track-package-question col-md-8 col-10 p-4">
              <p className="pb-3">
                {" "}
                Want to track a package? Go to Your Orders to view the tracking
                information and order details
              </p>
              <button className="btn"> Your Orders </button>
            </div>
          </div>
          <div className="d-md-flex pt-3">
            <div className="headings col-md-3">
              <p> Where's my order ?</p>
            </div>
            <ul className="ps-4 topics col-md-8 list-unstyled">
              <li>
                <a href=""> Track your Shipment </a>
              </li>
              <li>
                <a href=""> Find a missing package that shows as delivered </a>
              </li>
              <li>
                <a href=""> Undeliverable Shipments </a>
              </li>
              <li>
                <a href=""> Courier Contact Information</a>
              </li>
              <li>
                <a href=""> Missing Tracking Information </a>
              </li>
            </ul>
          </div>
          <hr className="col-11" />
          <div className="d-md-flex">
            <div className="headings col-md-3">
              <p> Shipping with Prime </p>
            </div>
            <ul className="ps-4 topics col-md-8 list-unstyled">
              <li>
                <a href=""> Prime Shopping Benefits </a>
              </li>
              <li>
                <a href=""> Order with Prime-SameDay Delivery </a>
              </li>
              <li>
                <a href=""> Sign up for Prime free trial </a>
              </li>
              <li>
                <a href=""> More about Prime</a>
              </li>
              <li>
                <a href=""> Missing Tracking Information </a>
              </li>
            </ul>
          </div>
          <hr className="col-11" />
          <div className="d-md-flex">
            <div className="headings col-md-3  ">
              <p> Shipping Speeds and Delivery Charges </p>
            </div>
            <ul className="ps-4 topics col-md-8 list-unstyled">
              <li>
                <a href=""> Free Shipping </a>
              </li>
              <li>
                <a href=""> Same day delivery dates </a>
              </li>
              <li>
                <a href=""> Determine Shipping Rates </a>
              </li>
            </ul>
          </div>
          <hr className="col-11" />
          <div className="d-md-flex">
            <div className="headings col-md-3">
              <p> International Shipping </p>
            </div>
            <ul className="ps-4 topics col-md-8 list-unstyled">
              <li>
                <a href=""> Globl Export Countries</a>
              </li>
              <li>
                <a href=""> International Delivery rates and time </a>
              </li>
              <li>
                <a href=""> Shipping Restrictions </a>
              </li>
            </ul>
          </div>
          <hr className="col-11" />
          <div className="d-md-flex">
            <div className="headings col-md-3">
              <p> Pickup Points </p>
            </div>
            <ul className="ps-4 topics col-md-8 list-unstyled">
              <li>
                <a href=""> Pickup Point Delivery </a>
              </li>
              <li>
                <a href=""> More about Pickup Points </a>
              </li>
            </ul>
          </div>
          <hr className="col-11" />
          <div className="d-md-flex">
            <div className="headings col-md-3">
              <p> General Shipping Information</p>
            </div>
            <ul className="ps-4 topics col-md-8 list-unstyled">
              <li>
                <a href=""> Billing and Shipping Addresses </a>
              </li>
              <li>
                <a href=""> Shipping Preferences </a>
              </li>
              <li>
                <a href=""> Deliveries from Logistics </a>
              </li>
              <li>
                <a href=""> Scheduled Delivery for large items</a>
              </li>
              <li>
                <a href="">
                  {" "}
                  Major Appliance delivery and Installation Services{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="p-3 pb-5">
            <div className="helpful-or-not-question col-6 p-3 pb-1">
              <p> Was this information helpful? </p>
              <div className="yes-or-no-buttons p-3 pt-1">
                <button className="btn me-3"> Yes </button>
                <button className="btn"> No </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bottom-hr " />
    </div>
  );
}

export default ShippingDelivery;
