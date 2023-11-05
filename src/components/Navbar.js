import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

function Navbar({ cartItems, onSearch }) {
  const itemCount = cartItems ? cartItems.length : 0;

  return (
    <header className="bg-gradient-to-r- bg-sky-600 p-6 text-white shadow-lg fixed w-full top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center rounded-lg">
    <div className="flex items-center space-x-12">
      <div>
      <Link to="/">
        <img src="/images/Logo4.png" alt="Logo" className="w-52 h-12" />
      </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
    <div className="flex items-center space-x-16">
      <Link to="/" className="text-2xl font-extrabold text-gray-300 hover:text-orange-300 font-mulish text-14">
        Home
      </Link>
      <Link to="/courses" className="text-2xl font-extrabold text-gray-300 hover:text-orange-300 font-mulish text-14">
        Courses
      </Link>
      <Link to="/cart" className="flex items-center space-x-1 transition-transform transform hover:scale-105">
        <FontAwesomeIcon icon={faShoppingCart} className="text-2xl text-white-300" />
        <span className="text-2xl">Cart</span>
        <span className="bg-red-500 text-white h-7 w-7 rounded-full flex items-center justify-center -mr-4">
          {itemCount}
        </span>
      </Link>
    </div>
  </div>
</header>

  
  );
}

export default Navbar;
