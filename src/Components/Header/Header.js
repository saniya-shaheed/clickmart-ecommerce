import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { getAllProducts } from "../APIServices/Api";

function Header( {onSearch, resetSearch} ) {
  const [searchInput, setSearchInput] = useState(false);
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    setSearchInput(!searchInput);
  };

  

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
        const searchedProducts = await getAllProducts();
        const resultProducts = searchedProducts.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        onSearch(resultProducts, query);
    }
  };

  const handleHomeClick = () => {
    resetSearch();
  }

  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-one">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand ps-md-3" onClick={handleHomeClick}>
            <h6 className="display-6">ClickMART</h6>
          </Link>
          <div className="right-links d-flex pe-md-3">
            {searchInput && (
                              <input 
                type="text" 
                placeholder="Search" 
                value={query} 
                onChange={handleInputChange} 
                onKeyDown={handleKeyDown} 
              />
            )}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={handleSearch}>
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <Link to='/signinpage' className="d-flex align-items-center" onClick={resetSearch}> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
            </Link>
            <Link to='/signinpage' className="d-flex align-items-center" onClick={resetSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-two navbar-expand-lg">
        <div className="container-fluid justify-content-center">
          <div className="navbar-two-links" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex flex-row">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to='/' className="nav-link" aria-current="page" onClick={resetSearch}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${location.pathname === '/shop/menclothing' ? 'active' : ''}`}>
                <Link to='/shop/menclothing' className="nav-link" onClick={resetSearch}>
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/careers' className="nav-link" onClick={resetSearch}>
                  Careers
                </Link>
              </li>
              <li className="nav-item d-md-flex">
                <Link to='/about' className="nav-link" onClick={resetSearch}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

   
    </header>
  );
}

export default Header;
