import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../components/Home";
import Header from "../components/Header";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import CoffeeDetails from "../components/CoffeeDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "header",
        Component: Header,
      },
      {
        path: "addcoffee",
        Component: AddCoffee,
      },
      {
        path: "/updatecoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffe-store-server-sigma-ruddy.vercel.app/addcoffee/${params.id}`
          ),
        Component: UpdateCoffee,
      },
      {
        path: "hero",
        Component: Hero,
      },
      {
        path: "homecard",
        Component: HomeCard,
      },
      {
        path: "/addcoffee/:id",
        loader: ({ params }) =>
          fetch(
            `https://coffe-store-server-sigma-ruddy.vercel.app/addcoffee/${params.id}`
          ),
        Component: CoffeeDetails,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "users",
        loader: () =>
          fetch("https://coffe-store-server-sigma-ruddy.vercel.app/profiles"),
        Component: Users,
      },
    ],
  },
]);
