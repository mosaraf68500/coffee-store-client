import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const mainCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, price, details, photo } =
    mainCoffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/addcoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
          Updated Coffee
        </h2>

        <form onSubmit={handleUpdateCoffee}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  defaultValue={name}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  defaultValue={quantity}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Supplier</label>
                <input
                  name="supplier"
                  type="text"
                  defaultValue={supplier}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Taste</label>
                <input
                  name="taste"
                  type="text"
                  defaultValue={taste}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  name="price"
                  type="number"
                  defaultValue={price}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Details</label>
                <input
                  name="details"
                  type="text"
                  defaultValue={details}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Photo</label>
              <input
                name="photo"
                type="text"
                defaultValue={photo}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <button className="w-full mt-4 bg-[#D2B48C] cursor-pointer hover:bg-[#b49977] text-gray-900 font-semibold py-2 rounded-md transition duration-300">
                Update Coffee
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
