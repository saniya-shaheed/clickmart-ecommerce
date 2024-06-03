import React, { useEffect, useState } from "react";
import ShopSideBar from "./ShopSideBar";
import { getAllProducts } from "../APIServices/Api";
import { Link } from "react-router-dom";

function Electronics() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    const fetchElectronics = async () => {
      const products = await getAllProducts();
      const filteredProducts = products.filter(
        (product) => product.category === "electronics"
      );
      setElectronics(filteredProducts);
    };
    fetchElectronics();
  }, []);

  return (
    <div className="shop">
      <div className="d-md-flex pt-3">
        <div className="col-md-2">
          <ShopSideBar />
        </div>
        <div className="col-md-9">
          <h5 className="p-4 pt-2 pb-0 d-md-none"> Electronics </h5>
          <div className="d-flex products-container">
            {electronics.map((product) => (
              <div className="p-3  card-container " key={product.id}>
                <Link to={`/shop/electronics/${product.id}`} className="card-link">
                  <div class="card">
                    <img
                      class="card-img-top p-3"
                      src={product.image}
                      alt="Card image cap"
                    />
                    <div class="card-body">
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

export default Electronics;