import React, { use } from "react";
import { Link } from "react-router";
import { AuthContex } from "../Contex/AuthContex";

const SignIn = () => {
  const { loginUser } = use(AuthContex);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((res) => {
        const userInFo = {
          email,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };

        fetch("https://coffe-store-server-sigma-ruddy.vercel.app/profiles", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInFo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign In</h1>
        <p className="text-sm dark:text-gray-600">
          Sign In to access your account
        </p>
      </div>
      <form onSubmit={handleLogin} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
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
              Sign In
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link to="signup" className="hover:underline dark:text-violet-600">
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
