import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./ShopSideBar.css";

function ShopSideBar() {
  const location = useLocation();
  return (
    <nav class="shop-sidebar navbar navbar-expand-md navbar-light ps-3">
      <button
        class="navbar-toggler-button d-md-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Category &#11167;
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="sidebar-links navbar-nav mr-auto flex-md-column p-3 pt-md-5 pt-2">
          <li
            className={`nav-item ${
              location.pathname === "/shop/menclothing" ? "active" : ""
            }`}
          >
            <Link to="/shop/menclothing" class="nav-link" href="#">
              Men's Clothing
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/shop/womenclothing" ? "active" : ""
            }`}
          >
            <Link to="/shop/womenclothing" class="nav-link" href="#">
              {" "}
              Women's Clothing{" "}
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/shop/jewelery" ? "active" : ""
            }`}
          >
            <Link to="/shop/jewelery" class="nav-link" href="#">
              Jewelery
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/shop/electronics" ? "active" : ""
            }`}
          >
            <Link to="/shop/electronics" class="nav-link" href="#">
              {" "}
              Electronics{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ShopSideBar;
