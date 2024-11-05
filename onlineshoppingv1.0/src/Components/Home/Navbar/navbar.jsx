import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='logo'>
        <h1>ZOROZ</h1>
      </div>
      <div className='navbar-search'>
        <input type="text" placeholder="Search for products, brands, and more" />
        <button type="submit">Search</button>
      </div>
      <nav className="navbar-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product List</Link></li>
          {/* <li><Link to="/checkout">Checkout</Link></li> */}
          <li><Link to="/cart">Cart</Link></li> 
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
