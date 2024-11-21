import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-green-600">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                className="w-24 h-24 object-cover rounded-lg"
                src={item.thumbnail}
                alt={item.name}
              />

              <div className="flex-1 ml-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  ${item.price} x {item.quantity}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transform transition duration-300"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transform transition duration-300"
                >
                  -
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 font-semibold hover:text-red-700 transition duration-300 ml-6"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Total: ${totalCost.toFixed(2)}
          </h2>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
            Checkout (Coming Soon)
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
