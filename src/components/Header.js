import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold flex items-center space-x-2"
        >
          <GiPlantRoots className="text-4xl" />
          <span>Plant Shop</span>
        </Link>
        <nav className="space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-green-100 transition duration-300 transform hover:scale-105"
          >
            <span className="inline-flex items-center space-x-1">
              <GiPlantRoots className="text-lg" />
              <span>Products</span>
            </span>
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-green-100 transition duration-300 transform hover:scale-105"
          >
            <span className="inline-flex items-center space-x-1">
              <FaShoppingCart className="text-lg" />
              <span>Cart</span>
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
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
