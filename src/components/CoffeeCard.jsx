import React from "react";
import { FaEdit, FaRegEyeSlash } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Links } from "react-router";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, price, photo } = coffee;

 const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:3000/addcoffee/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee item has been deleted.",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          Swal.fire("Error", "Failed to delete item", "error");
          console.error("Delete error:", error);
        });
    }
  });
};


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
            <span className="font-semibold">quantity:</span> {quantity}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Price:</span> {price}
          </p>
        </div>
        <div className="flex flex-col space-y-2 ml-4">
         <Link to={`/addcoffee/${_id}`}>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg">
            <FaRegEyeSlash size={24} />
          </button>
         
         </Link>
         <Link to={`/updatecoffee/${_id}`}>
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg">
            <FaEdit size={22} />
          </button>
         </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
          >
            <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
