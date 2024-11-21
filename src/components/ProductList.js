import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { plants } from "../data/plants";

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-center text-4xl font-extrabold mb-12 text-green-600">
        Our Beautiful Plants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              className="w-40 h-40 mx-auto object-cover mb-6 rounded-lg transition-transform duration-300 transform hover:scale-110"
              src={plant.thumbnail}
              alt={plant.name}
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {plant.name}
            </h3>
            <p className="text-lg text-green-600 font-bold mb-4">
              ${plant.price}
            </p>
            <button
              onClick={() => dispatch(addToCart(plant))}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
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
