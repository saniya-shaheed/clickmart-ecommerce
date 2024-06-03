import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getProductId } from "../APIServices/Api";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductId(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);

  return (
    <div className="product-details pt-3 pt-md-5">
      <div className="d-md-flex ">
        <div className="product-image col-md-6 pb-3">
          <img src={productDetails.image} alt="demo" />
        </div>
        <div className="col-md-6 ps-3 pe-3 pe-md-0 ps-md-0 ">
          <h4> {productDetails.title} </h4>
          <div className="col-3">
            <div class="progress">
              <div
                class="progress-bar  "
                role="progressbar"
                style={{ width: "89%" }}
                aria-valuenow="89"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {productDetails?.rating?.rate !== undefined
                  ? productDetails.rating.rate
                  : "N/A"}
              </div>
            </div>
          </div>
          <p className="no-of-people-bought">
            {productDetails?.rating?.count !== undefined
              ? productDetails.rating.count
              : "N/A"}{" "}
            people bought this since last month
          </p>

          <hr />
          <h4 className="price"> AED {productDetails.price} </h4>
          <p> All Prices include Tax.</p>
          <a href="/signInPage" className="btn add-to-cart-button">
            {" "}
            Add to Cart{" "}
          </a>
          <p className="col-md-8 pt-2">
            {" "}
            <span className="sign-in"> Sign in to redeem. </span> 15% off HSBC
            Credit Card | ClickMart App only. Enter code HSBCMAY15 at checkout.
            Discount by ClickMart.
            <span>
              {" "}
              <a
                href=""
                style={{ color: "cadetblue" }}
                className="text-decoration-none"
              >
                {" "}
                Terms{" "}
              </a>
            </span>{" "}
          </p>

          <p className="product-details-icons d-flex">
            <a
              class="btn col-6 col-md-3"
              data-toggle="collapse"
              href="#electronicPayment"
              role="button"
              aria-expanded="false"
              aria-controls="electronicPayment"
            >
              <img src="/icon-ePay.png" alt="electronic payment" />
              <p> Electronic Payment </p>
            </a>
            <a
              class="btn col-6 col-md-3"
              data-toggle="collapse"
              href="#returnable"
              role="button"
              aria-expanded="false"
              aria-controls="returnable"
            >
              <img src="/icon-returns.png" alt="electronic payment" />
              <p> 30 Days Returnable </p>
            </a>
            <a
              class="btn col-6 col-md-3"
              data-toggle="collapse"
              href="#freeShipping"
              role="button"
              aria-expanded="false"
              aria-controls="freeShipping"
            >
              <img
                src="/trust_icon_free_shipping.png"
                alt="electronic payment"
              />
              <p> Free Delivery </p>
            </a>
            <a
              class="btn col-6 col-md-3 "
              data-toggle="collapse"
              href="#secureTransaction"
              role="button"
              aria-expanded="false"
              aria-controls="secureTransaction"
            >
              <img
                src="/icon-secure-transaction.png"
                alt="electronic payment"
              />
              <p> Secure Transaction </p>
            </a>
          </p>

          <div class="row product-details-icons-popup">
            <div class="col-12">
              <div class="collapse multi-collapse" id="electronicPayment">
                <div class="card card-body  ">
                  <h6> Eligible for Electronic payments only </h6>
                  This item from this seller is eligible for electronic payment
                  only on checkout. It's not eligible for Cash on Delivery
                  (COD).
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="collapse multi-collapse" id="returnable">
                <div class="card card-body  ">
                  <h6> 30 Days Returnable </h6>
                  <table>
                    <tbody>
                      <tr className="column-headings col-3 ">
                        <td className=""> Return Reason </td>
                        <td className=" ps-3"> Return Period </td>
                        <td className="ps-3"> Return Policy </td>
                      </tr>
                      <tr className="column-contents col-3">
                        <td className="col-3">
                          {" "}
                          Size too large, Size too small, Bad quality, Any other
                          reason{" "}
                        </td>
                        <td className="ps-3"> 30 days from delivery </td>
                        <td className="ps-3"> Full refund of Replacement </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="collapse multi-collapse" id="freeShipping">
                <div class="card card-body  ">
                  <h6> Free delivery </h6>
                  This product is eligible for free delivery.
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="collapse multi-collapse" id="secureTransaction">
                <div class="card card-body  ">
                  <h6> Your transaction is secure </h6>
                  We work hard to protect your security and privacy. Our payment
                  security system encrypts your information during transmission.
                  We do not share your credit card details with third-party
                  sellers, and we do not sell your information to others.
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className=" category d-flex ">
            <h6 className=""> Category </h6>
            <p className="ps-2 "> {productDetails.category} </p>
          </div>
          <hr />
          <h6> Description </h6>
          <p> {productDetails.decription} </p>
          <div className="pb-5 report-issue">
            <a href="" className="text-decoration-none ">
              {" "}
              Report an issue with this product.{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
