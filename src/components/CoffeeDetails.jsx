import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, price, details, photo } = coffee;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex items-center flex-col md:flex-row max-w-4xl w-full">
        {/* Image Side */}
        <div className="md:w-1/2">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Side */}
        <div className="p-6 md:w-1/2 space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold capitalize text-amber-700 mb-2">{name}</h2>
            <p className="text-gray-700"><span className="font-semibold">Taste:</span> {taste}</p>
            <p className="text-gray-700"><span className="font-semibold">Quantity:</span> {quantity}</p>
            <p className="text-gray-700"><span className="font-semibold">Supplier:</span> {supplier}</p>
            <p className="text-gray-700"><span className="font-semibold">Price:</span> ৳{price}</p>
            <p className="text-gray-600 text-sm mt-2">{details}</p>
          </div>
          <div>
            <button className="w-full md:w-auto mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center gap-2 mt-6 text-amber-700 hover:text-amber-800 transition">
        <FaArrowLeftLong />
        <Link className="text-lg font-semibold" to="/">
          Back
        </Link>
      </div>
    </div>
  );
};

export default CoffeeDetails;
