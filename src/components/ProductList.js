import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import {plants} from '../data/plants';

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-center text-3xl font-bold mb-10 text-green-600">Our Plants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6">
            <img className="w-32 h-32 mx-auto object-cover mb-4" src={plant.thumbnail} alt={plant.name} />
            <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
            <p className="text-lg text-green-600 font-bold mb-4">${plant.price}</p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
