import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from "react-router-dom";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop/Shop";
import Careers from "../Components/Careers/Careers";
import About from "../Components/About/About";
import Help from "../Components/Help/Help";
import ShippingDelivery from "../Components/ShippingDelivery/ShippingDelivery";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import SignInPage from "../Components/SignInPage/SignInPage";
import WomenClothing from "../Components/Shop/WomenClothing";
import Jewelery from "../Components/Shop/Jewelery";
import MenClothing from "../Components/Shop/MenClothing";
import Electronics from "../Components/Shop/Electronics";
import '../Components/Home/Home.css'
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";

function RoutesLayout() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (resultProducts, searchQuery) => {
    setFilteredProducts(resultProducts);
    setQuery(searchQuery);
  }

  const resetSearch = () => {
    setFilteredProducts([]);
    setQuery("");
  }

  return (
    <Router>
    <Header onSearch={handleSearch} resetSearch={resetSearch}/>
    <MainContent query={query} filteredProducts={filteredProducts} />
    <Footer />
    </Router>
  )
}

function MainContent({ query, filteredProducts}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
}, [location.pathname]);


    return (
        <main>
        { query.length > 0 && location.pathname === "/" ? ( 
          filteredProducts.length > 0 ? (
          <div className="searched-results d-flex justify-content-center">
          <ul className="list-unstyled d-md-flex  justify-content-md-start">
            {filteredProducts.map(product => (
              <li key={product.id}>
                <Link to={`/shop/${product.id}`} className="text-decoration-none">
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
              </li>
            ))}
          </ul>
        </div> 
      ) : (
        <div className="d-flex" style={{height: '350px', justifyContent:'space-around', alignItems:'center'}}> Sorry, the product is not available. </div>
      ) 
    ) : (
        
        <Routes>
          <Route path="/clickmartecommerce" element={<Home />} />
          <Route path="/shop/menclothing" element={<Shop />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/shippingAndDelivery" element={<ShippingDelivery />} />
          <Route path="/shop/mensclothing/:id" element={<ProductDetails />} />
          <Route path="/shop/womensclothing/:id" element={<ProductDetails />} />
          <Route path="/shop/jewelery/:id" element={<ProductDetails />} />
          <Route path="/shop/electronics/:id" element={<ProductDetails />} />
          <Route path="/signInPage" element={<SignInPage />} />
          <Route path="/shop/menclothing" element={<MenClothing />} />
          <Route path="/shop/womenclothing" element={<WomenClothing />} />
          <Route path="/shop/jewelery" element={<Jewelery />} />
          <Route path="/shop/electronics" element={<Electronics />} />
        </Routes>
      )}
        </main>
  );
}

export default RoutesLayout;
