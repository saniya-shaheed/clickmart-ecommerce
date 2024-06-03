import React, { useEffect, useState } from "react";
import ShopSideBar from "./ShopSideBar";
import { getAllProducts } from "../APIServices/Api";
import { Link } from "react-router-dom";

function WomenClothing() {
  const [womenClothingProducts, setWomenClothingProducts] = useState([]);

  useEffect(() => {
    const fetchWomensClothing = async () => {
      const products = await getAllProducts();
      const filteredProducts = products.filter(
        (product) => product.category === "women's clothing"
      );
      setWomenClothingProducts(filteredProducts);
    };
    fetchWomensClothing();
  }, []);

  return (
    <div className="shop">
      <div className="d-md-flex pt-3">
        <div className="col-md-2">
          <ShopSideBar />
        </div>
        <div className="col-md-9">
          <h5 className="p-4 pt-2 pb-0 d-md-none"> Women's Clothing </h5>
          <div className="d-flex products-container ">
            {womenClothingProducts.map((product) => (
              <div className="p-3  card-container " key={product.id}>
                <Link to={`/shop/womensclothing/${product.id}`} className="card-link">
                  <div class="card">
                    <img
                      class="card-img-top p-3"
                      src={product.image}
                      alt="Card image cap"
                    />
                    <div class="card-body ">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenClothing;
