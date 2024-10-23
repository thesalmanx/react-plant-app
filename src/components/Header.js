import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌿 Plant Store</h1>
        
        <nav className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-gray-300 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-gray-300 transition duration-200"
          >
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
