import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
              <img className="w-24 h-24 object-cover rounded" src={item.thumbnail} alt={item.name} />
              
              <div className="flex-1 ml-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-lg text-gray-700">${item.price} x {item.quantity}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                >
                  -
                </button>
              </div>
              
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 font-semibold hover:underline ml-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Total: ${totalCost.toFixed(2)}</h2>
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            Checkout (Coming Soon)
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
