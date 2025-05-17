import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    fetch("https://coffe-store-server-sigma-ruddy.vercel.app/addcoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added coffeee successfully");
        }
        console.log(data);
      });
  };
  return (
    <div>
      <div className="flex  items-center gap-2.5 px-8">
        <FaArrowLeftLong />
        <Link className="text-lg font-semibold" to="/">
          {" "}
          Back
        </Link>
      </div>

      <div className="w-3/5 mx-auto bg-gray-100 mt-10 shadow-md p-10 rounded-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Add New Coffee
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="Enter coffee quantity"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Supplier</label>
                <input
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Taste</label>
                <input
                  name="taste"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="Enter coffee Price"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Details</label>
                <input
                  name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Photo</label>
              <input
                name="photo"
                type="text"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <button className="w-full mt-4 bg-[#D2B48C] cursor-pointer hover:bg-[#b49977] text-gray-900 font-semibold py-2 rounded-md transition duration-300">
                Add Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
