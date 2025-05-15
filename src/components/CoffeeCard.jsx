import React from "react";
import { FaEdit, FaRegEyeSlash } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef,  category, photo } = coffee;

  return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-md max-w-xl">
        <img
          src={photo} // Replace with actual path or import
          alt="Americano Coffee"
          className="w-24 h-auto"
        />
        <div className="flex-1 ml-6">
          <p className="text-gray-800">
            <span className="font-semibold">Name:</span> {name}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Price:</span> {category}
          </p>
        </div>
        <div className="flex flex-col space-y-2 ml-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg">
            <FaRegEyeSlash size={24} />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg">
           <FaEdit size={22} />
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
           <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
