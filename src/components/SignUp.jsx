import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../Contex/AuthContex";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContex);
  // console.log(createUser)

  const handeSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...profile } = Object.fromEntries(
      formData.entries()
    );
    //    console.log(email,password,profile)
    createUser(email, password)
      .then((result) => {
        console.log(result);

        // add database on profile

        fetch("http://localhost:3000/profiles", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(profile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm dark:text-gray-600">
          Sign Up to access your account
        </p>
      </div>
      <form onSubmit={handeSignUp} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-2 text-sm">
              address
            </label>
            <input
              type="text"
              name="address"
              placeholder="address"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2 text-sm">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block mb-2 text-sm">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full cursor-pointer px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            have an account yet?
            <Link to="signin" className="hover:underline dark:text-violet-600">
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
