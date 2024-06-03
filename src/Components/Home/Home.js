import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { getAllProducts } from "../APIServices/Api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.slice(3, 10));
    };
    fetchProducts();
  }, []);

  const scrollContainerRef = useRef(null);

  const leftScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const rightScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="home-section">
      <div className="banner d-md-flex p-3 p-md-5 pt-5 ">
        <div className="col-md-7 banner-product-details ">
          <p className="banner-product-name">
            Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor
          </p>
          <h5 className="display-5 pt-3"> Special Offer Today </h5>
          <h5 className="display-5"> Electronics </h5>
          <p className="text-secondary pt-3">
            
            We deliver our latest products to you at your doorstep
          </p>
          <h6 className="text-decoration-underline pt-4 pb-4">
            <Link to="/shop"> SHOP NOW </Link>
          </h6>
        </div>
        <div className="col-md-5 banner-product-image p-3 pe-5">
          <img src="banner_img.jpg" alt="banner image" className="w-100" />
        </div>
      </div>

      <div className="return-shipping-support container-fluid text-center p-4 p-md-5">
        <div className="return-shipping-support-border pb-md-4 row justify-content-center">
          <div className="free-return col-md-4 d-flex align-items-center justify-content-start justify-content-md-center p-3">
            <div className=" text-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z" />
              </svg>
            </div>
            <div className="ps-2 text-start">
              <h6> FREE RETURN </h6>
              <p> 30 days money back guarantee! </p>
            </div>
          </div>
          <div className="free-shipping col-md-4 d-flex align-items-center justify-content-start justify-content-md-center p-3">
            <div className=" text-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
              </svg>
            </div>
            <div className="ps-2 text-start">
              <h6> FREE SHIPPING </h6>
              <p> Free shipping on all orders </p>
            </div>
          </div>
          <div className="free-support col-md-4 d-flex align-items-center justify-content-start justify-content-md-center p-3">
            <div className="text-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
              </svg>
            </div>
            <div className="ps-2 text-start">
              <h6> SUPPORT 24/7 </h6>
              <p> We support online for 24 hours </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-interesting">
        <div className="heading-and-seemore d-flex p-3 p-md-5 pt-md-3 pb-md-3 align-items-center">
          <h3 className="pt-1"> Top Interesting </h3>
          <Link to="/shop/menclothing" className="pe-3">
            See More
          </Link>
        </div>
        <div class="container-fluid position-relative pb-3">
          <div class="scrolling-container-wrapper">
            <button
              class="scroll-left-btn btn position-absolute d-none d-md-flex"
              onClick={leftScroll}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <div
              className="scrolling-container d-flex flex-column flex-md-row overflow-auto align-items-center"
              ref={scrollContainerRef}
            >
              {products.map((product) => (
                <div className="p-3 card-container " key={product.id}>
                  <Link to={`/shop/${product.id}`} className="card-link">
                    <div class="card">
                      <img
                        class="card-img-top p-3"
                        src={product.image}
                        alt="Card image cap"
                      />
                      <div class="card-body pb-5">
                        <h5 class="card-title"> {product.title} </h5>
                        <p class="card-text pb-3">
                          $ {parseFloat(product.price).toFixed(2)}
                        </p>
                        <a href="#" class="add-to-cart-btn btn ">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              <div className="p-3 card-container ">
                <div class="see-more-card card ">
                  <Link to='/shop/menclothing'>See More... </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            class="scroll-right-btn btn position-absolute d-none d-md-flex"
            onClick={rightScroll}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
